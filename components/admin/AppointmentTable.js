"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Loader2, Eye, Calendar, Phone, User, Building2 } from "lucide-react";
import AppointmentDetailModal from "./AppointmentDetailModal";
import AdminDataTable from "./AdminDataTable";

const STATUS_STYLES = {
  pending: "bg-amber-100 text-amber-800",
  confirmed: "bg-blue-100 text-blue-800",
  attended: "bg-green-100 text-green-800",
  no_show: "bg-red-100 text-red-800",
  cancelled: "bg-gray-100 text-gray-600",
};

const STATUS_LABELS = {
  pending: "Pending",
  confirmed: "Confirmed",
  attended: "Attended",
  no_show: "No Show",
  cancelled: "Cancelled",
};

const CHAMBER_LABELS = {
  dhanmondi: "Dhanmondi",
  tangail: "Tangail",
  any: "Any",
};

const TABS = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "confirmed", label: "Confirmed" },
  { key: "attended", label: "Attended" },
  { key: "no_show", label: "No Show" },
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
      const url = filter === "all" ? "/api/appointments" : `/api/appointments?status=${filter}`;
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

  const columns = useMemo(
    () => [
      {
        id: "serial",
        header: "#",
        size: 52,
        enableSorting: false,
        Cell: ({ row }) => <span className="font-semibold text-slate-500">{row.index + 1}</span>,
      },
      {
        accessorKey: "fullName",
        header: "Name",
        size: 180,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <User className="h-3.5 w-3.5" />
            </div>
            <span className="font-semibold text-slate-800">{row.original.fullName}</span>
          </div>
        ),
      },
      {
        accessorKey: "phone",
        header: "Number",
        size: 150,
        Cell: ({ row }) => (
          <div className="flex items-center gap-1.5 text-slate-600">
            <Phone className="h-3.5 w-3.5 text-slate-400" />
            <span>{row.original.phone}</span>
          </div>
        ),
      },
      {
        accessorKey: "preferredChamber",
        header: "Chamber",
        size: 140,
        Cell: ({ row }) => (
          <div className="flex items-center gap-1 text-slate-600">
            <Building2 className="h-3.5 w-3.5 text-slate-400" />
            {row.original.preferredChamber && row.original.preferredChamber !== "any"
              ? CHAMBER_LABELS[row.original.preferredChamber] ?? row.original.preferredChamber
              : "Any"}
          </div>
        ),
      },
      {
        accessorKey: "preferredDate",
        header: "Preferred Date",
        Cell: ({ row }) => (
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(row.original.preferredDate)}
          </div>
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Requested",
        Cell: ({ row }) => <span className="text-sm text-slate-600">{formatDate(row.original.createdAt)}</span>,
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ row }) => (
          <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[row.original.status] ?? "bg-slate-100 text-slate-700"}`}>
            {STATUS_LABELS[row.original.status] ?? row.original.status}
          </span>
        ),
      },
      {
        id: "actions",
        header: "Action",
        size: 90,
        Cell: ({ row }) => (
          <button
            aria-label={`View appointment for ${row.original.fullName}`}
            onClick={() => setSelectedAppointment(row.original)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700 transition hover:bg-blue-100"
          >
            <Eye className="h-4 w-4" />
          </button>
        ),
      },
    ],
    []
  );

  return (
    <>
      <div>
        <div className="mb-6 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                filter === tab.key ? "bg-blue-600 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        )}

        {!isLoading && appointments.length === 0 && (
          <div className="py-20 text-center">
            <Calendar className="mx-auto mb-4 h-12 w-12 text-slate-300" />
            <p className="text-lg font-medium text-slate-600">No appointments found</p>
            <p className="mt-1 text-sm text-slate-400">
              {filter !== "all" ? `No ${STATUS_LABELS[filter] ?? filter} appointments` : "Requests will appear here"}
            </p>
          </div>
        )}

        {!isLoading && appointments.length > 0 && (
          <AdminDataTable columns={columns} data={appointments} />
        )}
      </div>

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
