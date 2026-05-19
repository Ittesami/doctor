"use client";
import { useState } from "react";
import {
  X, MessageCircle, Phone, Mail, Loader2,
  Calendar, Clock, User, FileText, Building2,
  CheckCircle, XCircle, UserX, AlertCircle,
} from "lucide-react";

const STATUS_STYLES = {
  pending:   "bg-amber-100 text-amber-800",
  confirmed: "bg-blue-100 text-blue-800",
  attended:  "bg-green-100 text-green-800",
  no_show:   "bg-red-100 text-red-800",
  cancelled: "bg-gray-100 text-gray-600",
};

const STATUS_LABELS = {
  pending:   "Pending",
  confirmed: "Confirmed",
  attended:  "Attended",
  no_show:   "No Show",
  cancelled: "Cancelled",
};

const CHAMBER_LABELS = {
  dhanmondi: "Dhanmondi, Dhaka",
  tangail:   "Asia Hospital, Tangail",
  any:       "No preference",
};

export default function AppointmentDetailModal({ appointment, onClose, onUpdated }) {
  const [confirmedDate, setConfirmedDate] = useState(
    appointment.confirmedDate
      ? new Date(appointment.confirmedDate).toISOString().split("T")[0]
      : ""
  );
  const [confirmedTime, setConfirmedTime] = useState(appointment.confirmedTime || "");
  const [adminNotes, setAdminNotes] = useState(appointment.adminNotes || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState("");

  const patch = async (payload) => {
    setIsUpdating(true);
    setError("");
    try {
      const res = await fetch(`/api/appointments/${appointment._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update.");
      onUpdated();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleConfirm = () => {
    if (!confirmedDate || !confirmedTime) {
      setError("Please set both a confirmed date and time before confirming.");
      return;
    }
    patch({ status: "confirmed", confirmedDate, confirmedTime, adminNotes });
  };

  const handleCancel = () => patch({ status: "cancelled", adminNotes });
  const handleAttended = () => patch({ status: "attended", adminNotes });
  const handleNoShow = () => patch({ status: "no_show", adminNotes });

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit", month: "short", year: "numeric",
    });
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "";
    const [h, m] = timeStr.split(":");
    const hour = parseInt(h);
    return `${hour % 12 || 12}:${m} ${hour < 12 ? "AM" : "PM"}`;
  };

  const whatsappLink = `https://wa.me/${appointment.phone.replace(/[^0-9]/g, "")}`;
  const callLink = `tel:${appointment.phone.replace(/[^0-9+]/g, "")}`;

  const { status } = appointment;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-lg w-full my-8 max-h-[90vh] overflow-y-auto shadow-xl">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-5 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900">Appointment Details</h2>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[status]}`}>
              {STATUS_LABELS[status]}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">

          {/* Patient Info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-gray-700 text-sm flex items-center gap-2">
              <User className="w-4 h-4" /> Patient
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Name</span>
                <span className="font-medium text-gray-900">{appointment.fullName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium text-gray-900">{appointment.phone}</span>
              </div>
              {appointment.email && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium text-gray-900">{appointment.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Preference */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-gray-700 text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Request Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center gap-1">
                  <Building2 className="w-3 h-3" /> Chamber
                </span>
                <span className="font-medium text-gray-900">
                  {CHAMBER_LABELS[appointment.preferredChamber] ?? appointment.preferredChamber}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Preferred Date</span>
                <span className="font-medium text-gray-900">{formatDate(appointment.preferredDate)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Submitted</span>
                <span className="font-medium text-gray-900">{formatDate(appointment.createdAt)}</span>
              </div>
            </div>
            {appointment.message && (
              <div className="border-t border-gray-200 pt-3 text-sm">
                <p className="text-gray-500 mb-1 flex items-center gap-1">
                  <FileText className="w-3 h-3" /> Message
                </p>
                <p className="text-gray-800 whitespace-pre-line leading-relaxed">{appointment.message}</p>
              </div>
            )}
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-3">
            <a
              href={callLink}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            {appointment.email && (
              <a
                href={`mailto:${appointment.email}`}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            )}
          </div>

          {/* ── STAGE 1: Pending → Confirm or Cancel ── */}
          {status === "pending" && (
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-amber-900 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Contact patient, then confirm the appointment
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-700 mb-1">
                    <Calendar className="w-3 h-3" /> Confirmed Date
                  </label>
                  <input
                    type="date"
                    value={confirmedDate}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setConfirmedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-xs font-medium text-gray-700 mb-1">
                    <Clock className="w-3 h-3" /> Confirmed Time
                  </label>
                  <input
                    type="time"
                    value={confirmedTime}
                    onChange={(e) => setConfirmedTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-gray-700 mb-1 block">Admin Notes</label>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="e.g. Patient confirmed over phone…"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none bg-white"
                />
              </div>

              {error && (
                <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handleCancel}
                  disabled={isUpdating}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 text-gray-700 py-2.5 rounded-lg font-medium transition-colors text-sm"
                >
                  {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <XCircle className="w-4 h-4" />}
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={isUpdating}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2.5 rounded-lg font-medium transition-colors text-sm"
                >
                  {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                  Confirm
                </button>
              </div>
            </div>
          )}

          {/* ── STAGE 2: Confirmed → Mark Outcome ── */}
          {status === "confirmed" && (
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 space-y-4">
              {/* Show confirmed slot */}
              <div className="flex items-center gap-4 text-sm text-blue-800 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(appointment.confirmedDate)}
                </span>
                {appointment.confirmedTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {formatTime(appointment.confirmedTime)}
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-blue-900 text-sm">
                After the appointment, mark the outcome:
              </h3>

              <div>
                <label className="text-xs font-medium text-gray-700 mb-1 block">Admin Notes</label>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Any notes about this appointment…"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm resize-none bg-white"
                />
              </div>

              {error && (
                <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>
              )}

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={handleAttended}
                  disabled={isUpdating}
                  className="flex flex-col items-center gap-1 bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white py-3 rounded-lg font-medium transition-colors text-xs"
                >
                  {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                  Attended
                </button>
                <button
                  onClick={handleNoShow}
                  disabled={isUpdating}
                  className="flex flex-col items-center gap-1 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white py-3 rounded-lg font-medium transition-colors text-xs"
                >
                  {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserX className="w-4 h-4" />}
                  No Show
                </button>
                <button
                  onClick={handleCancel}
                  disabled={isUpdating}
                  className="flex flex-col items-center gap-1 bg-gray-400 hover:bg-gray-500 disabled:opacity-50 text-white py-3 rounded-lg font-medium transition-colors text-xs"
                >
                  {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <XCircle className="w-4 h-4" />}
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* ── Final States: Attended / No Show / Cancelled ── */}
          {(status === "attended" || status === "no_show" || status === "cancelled") && (
            <div className={`rounded-lg p-4 border text-sm space-y-2 ${
              status === "attended"  ? "bg-green-50 border-green-200 text-green-800" :
              status === "no_show"  ? "bg-red-50 border-red-200 text-red-800" :
                                      "bg-gray-50 border-gray-200 text-gray-700"
            }`}>
              {appointment.confirmedDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">
                    {formatDate(appointment.confirmedDate)}
                    {appointment.confirmedTime && ` @ ${formatTime(appointment.confirmedTime)}`}
                  </span>
                </div>
              )}
              {appointment.adminNotes && (
                <p className="text-xs opacity-80 mt-1">{appointment.adminNotes}</p>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-5 py-4 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
