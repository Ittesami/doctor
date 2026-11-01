"use client";
import { useState } from "react";
import { Lock, User, AlertCircle, ShieldCheck, Stethoscope, HeartPulse, CalendarDays } from "lucide-react";
import Button from "@/components/ui/Button";

const highlights = [
  { icon: CalendarDays, label: "Appointments", value: "Live" },
  { icon: HeartPulse, label: "Care", value: "24/7" },
];

export default function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setIsLoading(false);
        return;
      }

      onLoginSuccess();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_30%),linear-gradient(135deg,#f0fdfd_0%,#f8fbff_45%,#ecfdf5_100%)] px-4 py-10">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 shadow-[0_35px_100px_rgba(14,116,144,0.12)] backdrop-blur-xl md:grid md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-sky-700 via-cyan-700 to-emerald-600 p-8 text-white md:flex md:flex-col md:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_25%)]" />

          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-50">
              <ShieldCheck className="h-3.5 w-3.5" />
              Secure Access
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight">
              Dr. Ahsan Habib
              <span className="mt-3 block text-cyan-100">Clinic Command Center</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-cyan-50/90">
              Manage appointments, patient enquiries, publications, and media from one polished healthcare dashboard.
            </p>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">{label}</div>
                <div className="mt-2 text-2xl font-black text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/90 p-6 sm:p-8 lg:p-10">
          <div className="mb-8 text-center md:text-left">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-emerald-500 shadow-[0_15px_30px_rgba(14,165,233,0.25)] md:mx-0">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Admin Login</h2>
            <p className="mt-2 text-sm text-slate-500">Sign in to continue</p>
          </div>

          {error && (
            <div className="mb-6 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <User className="h-4 w-4 text-sky-600" />
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Lock className="h-4 w-4 text-sky-600" />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <Button
              type="submit"
              variant="secondary"
              size="xl"
              fullWidth
              loading={isLoading}
              className="mt-2 rounded-2xl border border-cyan-500 bg-gradient-to-r from-sky-600 via-cyan-600 to-emerald-500 text-base font-black tracking-[0.08em] text-white shadow-[0_18px_30px_rgba(14,165,233,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_38px_rgba(16,185,129,0.24)]"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
