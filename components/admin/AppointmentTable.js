"use client";
import { useState, useEffect, useCallback } from "react";
import { Loader2, RefreshCw, LogOut, Eye, Calendar, Phone, User } from "lucide-react";
import AppointmentDetailModal from "./AppointmentDetailModal";

export default function AppointmentTable({ onLogout }) {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const fetchAppointments = useCallback(async () => {
    setIsLoading(true);
    try {
      const url = filter === "all" ? "/api/appointments" : `/api/appointments?status=${filter}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setAppointments(data.appointments);
      }
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
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const tabs = [
    { key: "all", label: "All" },
    { key: "pending", label: "Pending" },
    { key: "approved", label: "Approved" },
    { key: "rejected", label: "Rejected" },
  ];

  const handleLogout = async () => {
    document.cookie = "admin_token=; Max-Age=0; path=/";
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Appointment Management</h1>
            <p className="text-sm text-gray-500">Dr. Farida Khan - Admin Panel</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchAppointments}
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 px-3 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {tabs.map((tab) => (
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

        {/* Empty State */}
        {!isLoading && appointments.length === 0 && (
          <div className="text-center py-20">
            <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No appointments found</p>
            <p className="text-gray-400 text-sm mt-1">
              {filter !== "all" ? `No ${filter} appointments` : "Appointments will appear here"}
            </p>
          </div>
        )}

        {/* Appointment Cards */}
        {!isLoading && appointments.length > 0 && (
          <div className="space-y-3">
            {appointments.map((apt) => (
              <div
                key={apt._id}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  {/* Left: Patient Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{apt.patientName}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Phone className="w-3 h-3" />
                          {apt.whatsappNumber}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs ml-13">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {apt.sex === "male" ? "Male" : apt.sex === "female" ? "Female" : "Other"}, Age: {apt.age}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {apt.paymentMethod === "bank_transfer" ? "Bank" : "bKash"}: {apt.transactionId}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {formatDate(apt.createdAt)}
                      </span>
                    </div>
                  </div>

                  {/* Right: Status & Action */}
                  <div className="flex items-center gap-3 md:flex-shrink-0">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      apt.status === "pending" ? "bg-amber-100 text-amber-800" :
                      apt.status === "approved" ? "bg-green-100 text-green-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
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
    </div>
  );
}
