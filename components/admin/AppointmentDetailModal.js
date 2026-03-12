"use client";
import { useState } from "react";
import { X, MessageCircle, Check, XCircle, Loader2, Calendar, Clock, User, Phone, FileText } from "lucide-react";

export default function AppointmentDetailModal({ appointment, onClose, onUpdated }) {
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [adminNotes, setAdminNotes] = useState(appointment.adminNotes || "");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleAction = async (status) => {
    if (status === "approved" && (!scheduledDate || !scheduledTime)) {
      alert("Please set a schedule date and time before approving.");
      return;
    }

    setIsUpdating(true);
    try {
      const res = await fetch(`/api/appointments/${appointment._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status,
          scheduledDate: scheduledDate || undefined,
          scheduledTime: scheduledTime || undefined,
          adminNotes,
        }),
      });

      if (res.ok) {
        onUpdated();
      }
    } catch {
      alert("Failed to update appointment.");
    } finally {
      setIsUpdating(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const whatsappLink = `https://wa.me/${appointment.whatsappNumber.replace(/[^0-9]/g, "")}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-lg w-full my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Appointment Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Status Badge */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Status:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              appointment.status === "pending" ? "bg-amber-100 text-amber-800" :
              appointment.status === "approved" ? "bg-green-100 text-green-800" :
              "bg-red-100 text-red-800"
            }`}>
              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
            </span>
          </div>

          {/* Patient Info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
              <User className="w-4 h-4" /> Patient Information
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500">Name:</span>
                <p className="font-medium text-gray-900">{appointment.patientName}</p>
              </div>
              <div>
                <span className="text-gray-500">WhatsApp:</span>
                <p className="font-medium text-gray-900">{appointment.whatsappNumber}</p>
              </div>
              <div>
                <span className="text-gray-500">Sex:</span>
                <p className="font-medium text-gray-900 capitalize">{appointment.sex}</p>
              </div>
              <div>
                <span className="text-gray-500">Age:</span>
                <p className="font-medium text-gray-900">{appointment.age}</p>
              </div>
            </div>
            {appointment.details && (
              <div className="text-sm">
                <span className="text-gray-500 flex items-center gap-1">
                  <FileText className="w-3 h-3" /> Problem Details:
                </span>
                <p className="font-medium text-gray-900 mt-1">{appointment.details}</p>
              </div>
            )}
          </div>

          {/* Payment Info */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-gray-900 text-sm">Payment Information</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500">Method:</span>
                <p className="font-medium text-gray-900">
                  {appointment.paymentMethod === "bank_transfer" ? "Bank Transfer" : "bKash"}
                </p>
              </div>
              <div>
                <span className="text-gray-500">Transaction ID:</span>
                <p className="font-medium text-gray-900 font-mono">{appointment.transactionId}</p>
              </div>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Submitted:</span>
              <p className="font-medium text-gray-900">{formatDate(appointment.createdAt)}</p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>

          {/* Schedule & Actions (only for pending) */}
          {appointment.status === "pending" && (
            <div className="border-t border-gray-200 pt-5 space-y-4">
              <h3 className="font-semibold text-gray-900">Set Schedule & Approve</h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                    <Calendar className="w-3.5 h-3.5" /> Date
                  </label>
                  <input
                    type="date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                    <Clock className="w-3.5 h-3.5" /> Time
                  </label>
                  <input
                    type="time"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Admin Notes (Optional)</label>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Add notes..."
                  rows={2}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 text-sm resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleAction("rejected")}
                  disabled={isUpdating}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white py-2.5 px-4 rounded-lg font-semibold transition-colors text-sm"
                >
                  {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <XCircle className="w-4 h-4" />}
                  Reject
                </button>
                <button
                  onClick={() => handleAction("approved")}
                  disabled={isUpdating}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-2.5 px-4 rounded-lg font-semibold transition-colors text-sm"
                >
                  {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                  Approve
                </button>
              </div>
            </div>
          )}

          {/* Show schedule if already approved */}
          {appointment.status === "approved" && appointment.scheduledDate && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 text-sm mb-2">Scheduled Appointment</h3>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1 text-green-700">
                  <Calendar className="w-4 h-4" />
                  {formatDate(appointment.scheduledDate)}
                </div>
                {appointment.scheduledTime && (
                  <div className="flex items-center gap-1 text-green-700">
                    <Clock className="w-4 h-4" />
                    {appointment.scheduledTime}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-5 bg-gray-50">
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
