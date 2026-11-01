"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Loader2, RefreshCw, User, Inbox, CheckCheck, MailCheck } from "lucide-react";
import Button from "../ui/Button";
import AdminDataTable from "./AdminDataTable";

const STATUS_STYLES = {
  new: "bg-blue-100 text-blue-800",
  read: "bg-gray-100 text-gray-700",
  replied: "bg-green-100 text-green-800",
};

export default function ContactsTable() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchContacts = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      if (res.ok) setContacts(data.contacts);
    } catch {
      console.error("Failed to fetch contacts");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const updateStatus = async (id, status) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setContacts((prev) => prev.map((c) => (c._id === id ? { ...c, status } : c)));
      }
    } catch {
      console.error("Failed to update contact status");
    } finally {
      setUpdatingId(null);
    }
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const columns = useMemo(
    () => [
      {
        id: "serial",
        header: "#",
        size: 52,
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
            <div>
              <div className="font-semibold text-slate-800">{row.original.fullName}</div>
              <div className="mt-0.5 text-[10px] text-slate-500">{formatDate(row.original.createdAt)}</div>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "phone",
        header: "Number",
        size: 150,
        Cell: ({ row }) => <span className="text-slate-600">{row.original.phone}</span>,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 210,
        Cell: ({ row }) => <span className="text-slate-600">{row.original.email || "—"}</span>,
      },
      {
        accessorKey: "message",
        header: "Message",
        size: 260,
        Cell: ({ row }) => (
          <div className="max-w-xs text-slate-600">
            {row.original.message ? row.original.message.slice(0, 80) + (row.original.message.length > 80 ? "..." : "") : "No message"}
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 120,
        Cell: ({ row }) => (
          <span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold capitalize ${STATUS_STYLES[row.original.status] ?? "bg-slate-100 text-slate-700"}`}>
            {row.original.status}
          </span>
        ),
      },
      {
        id: "actions",
        header: "Action",
        size: 100,
        Cell: ({ row }) => (
          <div className="flex items-center gap-2">
            {row.original.status === "new" && (
              <button
                aria-label={`Mark contact as read for ${row.original.fullName}`}
                onClick={() => updateStatus(row.original._id, "read")}
                disabled={updatingId === row.original._id}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updatingId === row.original._id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCheck className="h-4 w-4" />}
              </button>
            )}
            {row.original.status === "read" && (
              <button
                aria-label={`Mark contact as replied for ${row.original.fullName}`}
                onClick={() => updateStatus(row.original._id, "replied")}
                disabled={updatingId === row.original._id}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {updatingId === row.original._id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <MailCheck className="h-4 w-4" />}
              </button>
            )}
            {row.original.status === "replied" && (
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <CheckCheck className="h-4 w-4" />
              </span>
            )}
          </div>
        ),
      },
    ],
    [updatingId]
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="py-20 text-center">
        <Inbox className="mx-auto mb-4 h-12 w-12 text-slate-300" />
        <p className="text-lg font-medium text-slate-600">No contact requests yet</p>
        <p className="mt-1 text-sm text-slate-400">Submissions from the appointment form will appear here</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {contacts.length} submission{contacts.length !== 1 ? "s" : ""} · <span className="font-semibold text-blue-600">{contacts.filter((c) => c.status === "new").length} new</span>
        </p>
        <Button onClick={fetchContacts} variant="warning" size="sm" icon={RefreshCw}>
          Refresh
        </Button>
      </div>

      <AdminDataTable columns={columns} data={contacts} />
    </div>
  );
}
