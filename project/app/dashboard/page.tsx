"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Home,
  Users,
  Bell,
  Settings,
  Search,
  MessageSquare,
  Video,
  Hash,
  LogOut,
  User,
} from "lucide-react";
import Link from "next/link";
import { UserProfileModal } from "./components/user-profile-modal";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("home");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const sidebarItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Users, label: "Friends", id: "friends" },
    { icon: Hash, label: "Servers", id: "servers" },
    { icon: Bell, label: "Notifications", id: "notifications" },
    { icon: Settings, label: "Settings", id: "settings" },
  ];

  const recentChats = [
    { id: 1, name: "Design Team", message: "New project discussion", unread: 3 },
    { id: 2, name: "Marketing", message: "Campaign updates", unread: 0 },
    { id: 3, name: "Development", message: "Sprint planning", unread: 1 },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-16 md:w-64 bg-card border-r flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold hidden md:block">ChatApp</h1>
        </div>
        <nav className="flex-1 p-2 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="h-16 border-b bg-card flex items-center justify-between px-4">
          <div className="flex items-center flex-1 max-w-xl">
            <Search className="h-5 w-5 text-muted-foreground mr-2" />
            <Input
              placeholder="Search messages..."
              className="max-w-md"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <button
              className="flex items-center space-x-2 hover:bg-secondary rounded-lg p-2 transition-colors"
              onClick={() => setIsProfileOpen(true)}
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <User className="h-5 w-5" />
              </div>
              <span className="hidden md:inline">John Doe</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="col-span-2 space-y-6">
              <div className="flex space-x-4">
                <Button className="flex-1">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  New Chat
                </Button>
                <Button className="flex-1" variant="outline">
                  <Video className="mr-2 h-5 w-5" />
                  Start Call
                </Button>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentChats.map((chat) => (
                    <div
                      key={chat.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary cursor-pointer"
                    >
                      <div>
                        <h3 className="font-medium">{chat.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {chat.message}
                        </p>
                      </div>
                      {chat.unread > 0 && (
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Online Friends */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Online Friends</h2>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-2 hover:bg-secondary rounded-lg cursor-pointer"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <User className="h-6 w-6" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background"></div>
                    </div>
                    <div>
                      <p className="font-medium">User {i + 1}</p>
                      <p className="text-sm text-muted-foreground">Online</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <UserProfileModal
        open={isProfileOpen}
        onOpenChange={setIsProfileOpen}
      />
    </div>
  );
}