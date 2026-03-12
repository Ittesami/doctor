"use client";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import LoginForm from "@/components/admin/LoginForm";
import AppointmentTable from "@/components/admin/AppointmentTable";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => {
        if (res.ok) setIsLoggedIn(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

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

  return <AppointmentTable onLogout={() => setIsLoggedIn(false)} />;
}
