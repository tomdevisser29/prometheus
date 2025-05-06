"use client";

import * as React from "react";
import {
  Bot,
  ChartColumn,
  Compass,
  LayoutDashboard,
  LifeBuoy,
  ScanText,
  Send,
  ShieldCheck,
} from "lucide-react";

import { NavGroup } from "@/components/nav-group";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Websites",
      url: "/dashboard/websites",
      icon: Compass,
      items: [
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
        {
          title: "Security",
          url: "#",
        },
      ],
    },
    {
      title: "Automation",
      url: "/dashboard/automation",
      icon: Bot,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: ChartColumn,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  tools: [
    {
      title: "Quickscan",
      url: "/dashboard/quickscan",
      icon: ScanText,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="sidebar" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <ShieldCheck />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Prometheus</span>
                  <span className="truncate text-xs">Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavGroup items={data.navMain} heading="General" />
        <NavGroup items={data.tools} heading="Tools" />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
