"use client";

import { useState } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar, type NavigationCategory } from "@/components/brand-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, Clock, X } from "lucide-react";

// メニュー項目
const menuItems: NavigationCategory[] = [
  { title: "Dashboard", name: "#dashboard", items: [] },
  { title: "Requests", name: "#requests", items: [] },
  { title: "Settings", name: "#settings", items: [] },
];

// モックデータ
const requests = [
  {
    id: "ID 2420",
    name: "We need new screens for employees arriving tomorrow.",
    assignedTo: { name: "Assign", avatar: null },
    createdOn: "2018-06-07",
  },
  {
    id: "ID 2421",
    name: "I need to plug in more USB devices in my laptop.",
    assignedTo: { name: "Demetrius", avatar: "/avatars/demetrius.jpg" },
    createdOn: "2018-06-07",
  },
  {
    id: "ID 2419",
    name: "We need new screens for employees arriving tomorrow.",
    assignedTo: { name: "Assign", avatar: null },
    createdOn: "2018-06-05",
  },
  {
    id: "ID 2418",
    name: "I need a new chair, since mine is too small for me.",
    assignedTo: { name: "Derek", avatar: "/avatars/derek.jpg" },
    createdOn: "2018-06-03",
  },
  {
    id: "ID 2417",
    name: "Is it possible to add another session to my laptop?",
    assignedTo: { name: "Assign", avatar: null },
    createdOn: "2018-06-01",
  },
  {
    id: "ID 2416",
    name: "I need a video session for a meeting next week.",
    assignedTo: { name: "David", avatar: "/avatars/david.jpg" },
    createdOn: "2018-05-30",
  },
  {
    id: "ID 2415",
    name: "People need coffee in Floor 2, and the machine is broken.",
    assignedTo: { name: "Darlene", avatar: "/avatars/darlene.jpg" },
    createdOn: "2018-05-28",
  },
  {
    id: "ID 2413",
    name: "The armrest of my chair broke, can you fix it?",
    assignedTo: { name: "Daniel", avatar: "/avatars/daniel.jpg" },
    createdOn: "2018-05-26",
  },
  {
    id: "ID 2414",
    name: "I can only turn down the volume using the keyboard.",
    assignedTo: { name: "Demetrius", avatar: "/avatars/demetrius.jpg" },
    createdOn: "2018-05-26",
  },
  {
    id: "ID 2412",
    name: "I'm not able to mute my microphone using the keyboard.",
    assignedTo: { name: "Assign", avatar: null },
    createdOn: "2018-05-24",
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* ヘッダ（full-width） */}
      <BrandHeader onMenuClick={() => setSidebarOpen(true)} />

      {/* メインコンテンツエリア */}
      <div className="flex flex-1 gap-6 p-6">
        {/* 左サイド: ナビゲーション */}
        <aside className="hidden w-52 shrink-0 lg:block">
          <BrandSidebar
            categories={menuItems}
            open={sidebarOpen}
            onOpenChange={setSidebarOpen}
          />
        </aside>

        {/* 右サイド: メインエリア */}
        <main className="h-[calc(100vh-8.5rem)] flex-1 space-y-6 overflow-auto">

        {/* 統計カード（3つ横並び） */}
        <div className="grid grid-cols-3 gap-4">
          {/* Pending Card */}
          <Card>
            <CardContent className="flex items-center justify-between py-6">
              <div>
                <div className="text-4xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
              <div className="flex size-12 items-center justify-center rounded-full bg-orange-100">
                <Clock className="size-6 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          {/* Declined Card */}
          <Card>
            <CardContent className="flex items-center justify-between py-6">
              <div>
                <div className="text-4xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Declined</div>
              </div>
              <div className="flex size-12 items-center justify-center rounded-full bg-red-100">
                <X className="size-6 text-red-600" />
              </div>
            </CardContent>
          </Card>

          {/* Approved Card */}
          <Card>
            <CardContent className="flex items-center justify-between py-6">
              <div>
                <div className="text-4xl font-bold">17</div>
                <div className="text-sm text-muted-foreground">Approved</div>
              </div>
              <div className="flex size-12 items-center justify-center rounded-full bg-green-100">
                <Check className="size-6 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Last Submitted Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Last Submitted</CardTitle>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View All
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Id</TableHead>
                  <TableHead>Request Name</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead className="text-right">Created On</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium text-blue-600">
                      {request.id}
                    </TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          {request.assignedTo.avatar ? (
                            <AvatarImage
                              src={request.assignedTo.avatar}
                              alt={request.assignedTo.name}
                            />
                          ) : null}
                          <AvatarFallback>
                            {request.assignedTo.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span
                          className={
                            request.assignedTo.name === "Assign"
                              ? "text-blue-600"
                              : ""
                          }
                        >
                          {request.assignedTo.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {request.createdOn}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        </main>
      </div>
    </div>
  );
}
