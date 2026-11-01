"use client";
import { useState, useEffect } from "react";
import { Loader2, LogOut, CalendarDays, MessageSquareText, BookOpenText, Image as ImageIcon, ShieldCheck, Bell, Stethoscope, HeartPulse, Activity, UserRoundPlus } from "lucide-react";
import LoginForm from "@/components/admin/LoginForm";
import AppointmentTable from "@/components/admin/AppointmentTable";
import ContactsTable from "@/components/admin/ContactsTable";
import PublicationsManager from "@/components/admin/PublicationsManager";
import GalleryManager from "@/components/admin/GalleryManager";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

const TABS = [
  { key: "appointments", label: "Appointments", icon: CalendarDays },
  { key: "contacts", label: "Contact Requests", icon: MessageSquareText },
  { key: "publications", label: "Publications", icon: BookOpenText },
  { key: "gallery", label: "Gallery", icon: ImageIcon },
];

const summaryCards = [
  { label: "Today", value: "12", accent: "bg-cyan-500", icon: Activity },
  { label: "Patients", value: "184", accent: "bg-violet-500", icon: UserRoundPlus },
  { label: "Reports", value: "07", accent: "bg-emerald-500", icon: HeartPulse },
  { label: "Media", value: "26", accent: "bg-amber-500", icon: Stethoscope },
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("appointments");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => {
        if (res.ok) setIsLoggedIn(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsLoggedIn(false);
      setShowLogoutDialog(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-slate-700">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
          <p className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase">Loading Dashboard</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-emerald-50 text-slate-800">
      <div className="w-full">
        <div className="border border-sky-100 bg-white/90 shadow-[0_30px_90px_rgba(15,118,110,0.12)] backdrop-blur-sm">
          <header className="border-b border-sky-100 bg-gradient-to-r from-sky-700 via-cyan-700 to-emerald-600">
            <div className="flex flex-col gap-5 px-3 py-5 sm:px-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/20 shadow-lg shadow-cyan-900/20">
                  <ShieldCheck className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-100">Doctor Portal</p>
                  <h1 className="mt-1 text-2xl font-black tracking-tight text-white">Clinic Command Center</h1>
                  <p className="text-sm text-cyan-50/90">Dr. Ahsan Habib — Healthcare Management Dashboard</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-sm transition hover:bg-white/15">
                  <Bell className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setShowLogoutDialog(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-100"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>

            <div className="px-3 pb-5 sm:px-4 lg:px-6">
              <div className="mb-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map(({ label, value, accent, icon: Icon }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm">
                    <div className="mb-3 flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-100">{label}</span>
                    </div>
                    <div className="text-3xl font-black text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/10 p-2">
                {TABS.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                      activeTab === key
                        ? "bg-white text-sky-700 shadow-lg shadow-cyan-900/10"
                        : "bg-transparent text-cyan-50/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </header>

          <main className="bg-slate-50/80 p-3 sm:p-4 lg:p-5">
            <div className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:p-4 lg:p-5">
              {activeTab === "appointments" && <AppointmentTable />}
              {activeTab === "contacts" && <ContactsTable />}
              {activeTab === "publications" && <PublicationsManager />}
              {activeTab === "gallery" && <GalleryManager />}
            </div>
          </main>

          <ConfirmDialog
            open={showLogoutDialog}
            title="Logout from admin panel?"
            description="You will be signed out of the admin dashboard. You can sign in again anytime."
            confirmText="Logout"
            cancelText="Cancel"
            confirmVariant="primary"
            cancelVariant="danger"
            onConfirm={handleLogout}
            onCancel={() => setShowLogoutDialog(false)}
          />
        </div>
      </div>
    </div>
  );
}
