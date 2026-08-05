"use client";
import AdminDashboard from "@/components/admin";
import { Loader } from "lucide-react";

const AdminPage = () => {
  const loading = false;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AdminDashboard />
    </div>
  );
};

export default AdminPage;
