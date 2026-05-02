"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Loader2, RefreshCw, User, Phone, Mail, MessageSquare,
  Inbox, ChevronDown, ChevronUp, Check
} from "lucide-react";

const STATUS_STYLES = {
  new: "bg-blue-100 text-blue-800",
  read: "bg-gray-100 text-gray-700",
  replied: "bg-green-100 text-green-800",
};

export default function ContactsTable() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
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
        setContacts((prev) =>
          prev.map((c) => (c._id === id ? { ...c, status } : c))
        );
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="text-center py-20">
        <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">No contact requests yet</p>
        <p className="text-gray-400 text-sm mt-1">
          Submissions from the appointment form will appear here
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">
          {contacts.length} submission{contacts.length !== 1 ? "s" : ""}
          {" · "}
          <span className="text-blue-600 font-medium">
            {contacts.filter((c) => c.status === "new").length} new
          </span>
        </p>
        <button
          onClick={fetchContacts}
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Contact cards */}
      <div className="space-y-3">
        {contacts.map((contact) => {
          const isExpanded = expandedId === contact._id;

          return (
            <div
              key={contact._id}
              className={`bg-white border rounded-lg shadow-sm transition-shadow hover:shadow-md ${
                contact.status === "new" ? "border-blue-200" : "border-gray-200"
              }`}
            >
              {/* Summary row */}
              <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                {/* Left */}
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    contact.status === "new" ? "bg-blue-100" : "bg-gray-100"
                  }`}>
                    <User className={`w-5 h-5 ${contact.status === "new" ? "text-blue-600" : "text-gray-500"}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{contact.fullName}</h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {contact.phone}
                      </span>
                      {contact.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" /> {contact.email}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{formatDate(contact.createdAt)}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Status badge */}
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_STYLES[contact.status]}`}>
                    {contact.status}
                  </span>

                  {/* Status actions */}
                  {contact.status === "new" && (
                    <button
                      onClick={() => updateStatus(contact._id, "read")}
                      disabled={updatingId === contact._id}
                      title="Mark as read"
                      className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
                    >
                      {updatingId === contact._id
                        ? <Loader2 className="w-4 h-4 animate-spin" />
                        : <Check className="w-4 h-4" />
                      }
                    </button>
                  )}
                  {contact.status === "read" && (
                    <button
                      onClick={() => updateStatus(contact._id, "replied")}
                      disabled={updatingId === contact._id}
                      title="Mark as replied"
                      className="text-xs px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded hover:bg-green-100 transition-colors"
                    >
                      Replied
                    </button>
                  )}

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : contact._id)}
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 px-3 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    {isExpanded ? (
                      <><ChevronUp className="w-4 h-4" /> Hide</>
                    ) : (
                      <><ChevronDown className="w-4 h-4" /> View</>
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded message */}
              {isExpanded && (
                <div className="border-t border-gray-100 px-4 md:px-5 py-4 bg-gray-50 rounded-b-lg">
                  {contact.message ? (
                    <div className="flex gap-3">
                      <MessageSquare className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                        {contact.message}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 italic">No message provided.</p>
                  )}

                  {/* Quick contact buttons */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <a
                      href={`tel:${contact.phone}`}
                      className="inline-flex items-center gap-1.5 text-xs bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      <Phone className="w-3 h-3" /> Call
                    </a>
                    <a
                      href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
                    >
                      <Phone className="w-3 h-3" /> WhatsApp
                    </a>
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-1.5 text-xs bg-gray-700 text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium"
                      >
                        <Mail className="w-3 h-3" /> Email
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
