"use client";

import { PageShell } from "@/components/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [statsRes, usersRes] = await Promise.all([
          fetch("/api/admin/stats"),
          fetch("/api/admin/users")
        ]);

        if (!statsRes.ok || !usersRes.ok) {
           if (statsRes.status === 401 || statsRes.status === 403) {
             router.push("/auth/login?redirect=/dashboard/admin");
             return;
           }
           throw new Error("Failed to load admin data");
        }

        setStats(await statsRes.json());
        setUsers(await usersRes.json());
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [router]);

  async function handleDeleteUser(id: string) {
    if (!confirm("Delete this user? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete user");
      setUsers(prev => prev.filter(u => u._id !== id));
    } catch {
      alert("Could not delete user.");
    }
  }

  async function handleRoleChange(id: string, newRole: string) {
    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole })
      });
      if (!res.ok) throw new Error("Failed to update role");
      const updatedUser = await res.json();
      setUsers(prev => prev.map(u => u._id === id ? updatedUser : u));
    } catch {
      alert("Could not update role.");
    }
  }

  if (loading) return <PageShell title="Admin Hub" description=""><div className="py-20 text-center">Loading...</div></PageShell>;

  return (
    <PageShell
      title="Admin Hub"
      description="Platform overview and user management."
    >
      {error && (
         <div className="mb-6 rounded-md bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">{error}</div>
      )}

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="rounded-3xl border-0 shadow-sm bg-primary/5">
            <CardHeader className="py-4"><CardTitle className="text-sm text-muted-foreground">Total Users</CardTitle></CardHeader>
            <CardContent><div className="text-3xl font-bold">{stats.totalUsers}</div></CardContent>
          </Card>
          <Card className="rounded-3xl border-0 shadow-sm bg-primary/5">
            <CardHeader className="py-4"><CardTitle className="text-sm text-muted-foreground">Companies</CardTitle></CardHeader>
            <CardContent><div className="text-3xl font-bold">{stats.totalCompanies}</div></CardContent>
          </Card>
          <Card className="rounded-3xl border-0 shadow-sm bg-primary/5">
            <CardHeader className="py-4"><CardTitle className="text-sm text-muted-foreground">Total Hotels</CardTitle></CardHeader>
            <CardContent><div className="text-3xl font-bold">{stats.totalHotels}</div></CardContent>
          </Card>
          <Card className="rounded-3xl border-0 shadow-sm bg-primary/10">
            <CardHeader className="py-4"><CardTitle className="text-sm text-muted-foreground">Total Bookings</CardTitle></CardHeader>
            <CardContent><div className="text-3xl font-bold text-primary">{stats.totalBookings}</div></CardContent>
          </Card>
        </div>
      )}

      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>
        <CardContent>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="text-xs uppercase bg-muted/50 rounded-t-lg">
                 <tr>
                   <th className="px-4 py-3 rounded-tl-lg">Name</th>
                   <th className="px-4 py-3">Email</th>
                   <th className="px-4 py-3">Role</th>
                   <th className="px-4 py-3 text-right">Joined</th>
                   <th className="px-4 py-3 text-right rounded-tr-lg">Actions</th>
                 </tr>
               </thead>
               <tbody>
                 {users.map((user) => (
                   <tr key={user._id} className="border-b last:border-0 hover:bg-muted/20">
                     <td className="px-4 py-3 font-medium">{user.name}</td>
                     <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                     <td className="px-4 py-3">
                        <select 
                          className="bg-background border rounded px-2 py-1 text-xs" 
                          value={user.role}
                          onChange={(e) => handleRoleChange(user._id, e.target.value)}
                        >
                          <option value="user">User</option>
                          <option value="company">Company</option>
                          <option value="admin">Admin</option>
                        </select>
                     </td>
                     <td className="px-4 py-3 text-right text-muted-foreground">
                        {new Date(user.createdAt).toLocaleDateString()}
                     </td>
                     <td className="px-4 py-3 text-right">
                       <Button 
                         variant="ghost" 
                         size="sm" 
                         className="text-destructive hover:text-destructive hover:bg-destructive/10"
                         onClick={() => handleDeleteUser(user._id)}
                       >
                         Delete
                       </Button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
