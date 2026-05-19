"use client";
import { useState, useEffect, useCallback } from "react";
import { Loader2, Eye, Calendar, Phone, User, Building2 } from "lucide-react";
import AppointmentDetailModal from "./AppointmentDetailModal";

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
  dhanmondi: "Dhanmondi",
  tangail:   "Tangail",
  any:       "Any",
};

const TABS = [
  { key: "all",       label: "All" },
  { key: "pending",   label: "Pending" },
  { key: "confirmed", label: "Confirmed" },
  { key: "attended",  label: "Attended" },
  { key: "no_show",   label: "No Show" },
  { key: "cancelled", label: "Cancelled" },
];

export default function AppointmentTable() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const fetchAppointments = useCallback(async () => {
    setIsLoading(true);
    try {
      const url =
        filter === "all"
          ? "/api/appointments"
          : `/api/appointments?status=${filter}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) setAppointments(data.appointments);
    } catch {
      console.error("Failed to fetch appointments");
    } finally {
      setIsLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <div>
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                filter === tab.key
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        )}

        {/* Empty */}
        {!isLoading && appointments.length === 0 && (
          <div className="text-center py-20">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No appointments found</p>
            <p className="text-gray-400 text-sm mt-1">
              {filter !== "all" ? `No ${STATUS_LABELS[filter] ?? filter} appointments` : "Requests will appear here"}
            </p>
          </div>
        )}

        {/* Cards */}
        {!isLoading && appointments.length > 0 && (
          <div className="space-y-3">
            {appointments.map((apt) => (
              <div
                key={apt._id}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{apt.fullName}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Phone className="w-3 h-3" />
                          {apt.phone}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs ml-13">
                      {apt.preferredChamber && apt.preferredChamber !== "any" && (
                        <span className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          <Building2 className="w-3 h-3" />
                          {CHAMBER_LABELS[apt.preferredChamber] ?? apt.preferredChamber}
                        </span>
                      )}
                      {apt.preferredDate && (
                        <span className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          <Calendar className="w-3 h-3" />
                          Pref: {formatDate(apt.preferredDate)}
                        </span>
                      )}
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        Requested: {formatDate(apt.createdAt)}
                      </span>
                      {apt.status === "confirmed" && apt.confirmedDate && (
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">
                          Confirmed: {formatDate(apt.confirmedDate)} {apt.confirmedTime && `@ ${apt.confirmedTime}`}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-3 md:flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[apt.status] ?? ""}`}>
                      {STATUS_LABELS[apt.status] ?? apt.status}
                    </span>
                    <button
                      onClick={() => setSelectedAppointment(apt)}
                      className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 px-3 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedAppointment && (
        <AppointmentDetailModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          onUpdated={() => {
            setSelectedAppointment(null);
            fetchAppointments();
          }}
        />
      )}
    </>
  );
}
