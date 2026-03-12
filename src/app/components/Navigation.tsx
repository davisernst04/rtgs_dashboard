'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, BarChart3, Users, FileText } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from './ui/sidebar';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Live Dashboard', icon: Activity },
    { path: '/players', label: 'Player Stats', icon: Users },
    { path: '/tactical', label: 'Tactical View', icon: BarChart3 },
    { path: '/reports', label: 'Match Reports', icon: FileText },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="p-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <Activity className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <h2 className="text-foreground font-bold text-lg leading-none">Analytics</h2>
            <p className="text-muted-foreground text-xs uppercase tracking-tight">Coach Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton 
                  asChild 
                  isActive={active}
                  tooltip={item.label}
                  className={active ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}
                >
                  <Link href={item.path} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="mt-auto pt-4 border-t border-border">
        <div className="px-4 py-3 group-data-[collapsible=icon]:hidden">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold text-sm tracking-widest">
              LIVE
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-medium">
            U of S vs Calgary
          </p>
          <p className="text-xs text-muted-foreground/60 tabular-nums">
            62:34
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
