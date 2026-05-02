"use client";
import { useState, useEffect } from "react";
import { Loader2, LogOut, Calendar, MessageSquare } from "lucide-react";
import LoginForm from "@/components/admin/LoginForm";
import AppointmentTable from "@/components/admin/AppointmentTable";
import ContactsTable from "@/components/admin/ContactsTable";

const TABS = [
  { key: "appointments", label: "Appointments", icon: Calendar },
  { key: "contacts",     label: "Contact Requests", icon: MessageSquare },
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("appointments");

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => { if (res.ok) setIsLoggedIn(true); })
      .finally(() => setIsLoading(false));
  }, []);

  const handleLogout = () => {
    document.cookie = "admin_token=; Max-Age=0; path=/";
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Shared Header ── */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-sm text-gray-500">Dr. Ahsan Habib — Management Dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 px-3 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* ── Section Tabs ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-0 border-t border-gray-100">
          {TABS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                activeTab === key
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {activeTab === "appointments" && <AppointmentTable />}
        {activeTab === "contacts"     && <ContactsTable />}
      </div>

    </div>
  );
}
