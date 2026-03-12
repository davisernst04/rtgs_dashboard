'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  BarChart3,
  ChevronRight,
  FileText,
  ShieldCheck,
  TimerReset,
  Users,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from './ui/sidebar';

const navItems = [
  { path: '/', label: 'Live Dashboard', icon: Activity, caption: 'Live match KPIs' },
  { path: '/players', label: 'Player Stats', icon: Users, caption: 'Individual metrics' },
  { path: '/tactical', label: 'Tactical View', icon: BarChart3, caption: 'Shape and coverage' },
  { path: '/reports', label: 'Match Reports', icon: FileText, caption: 'Post-match summary' },
];

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border/70">
      <SidebarHeader className="gap-4 border-b border-sidebar-border/70 px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
            <Activity className="h-5 w-5" />
          </div>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">RTGS</p>
            <h2 className="truncate text-lg font-semibold text-sidebar-foreground">Coach Dashboard</h2>
            <p className="text-xs text-muted-foreground">Real-time soccer intelligence</p>
          </div>
        </div>

        <div className="rounded-2xl border border-primary/15 bg-primary/8 p-3 group-data-[collapsible=icon]:hidden">
          <div className="flex items-center gap-2 text-primary">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">System Healthy</span>
          </div>
          <p className="mt-2 text-sm text-sidebar-foreground">Live tracking feed stable. Model inference under 400 ms.</p>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  asChild
                  isActive={active}
                  tooltip={item.label}
                  size="lg"
                  className="h-auto rounded-xl px-3 py-3 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                >
                  <Link href={item.path} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-background/40 group-data-[active=true]:border-primary-foreground/15 group-data-[active=true]:bg-primary-foreground/10">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
                      <div className="truncate font-medium">{item.label}</div>
                      <div className="truncate text-xs text-muted-foreground data-[active=true]:text-primary-foreground/80">
                        {item.caption}
                      </div>
                    </div>
                    <ChevronRight className="ml-auto h-4 w-4 opacity-50 group-data-[collapsible=icon]:hidden" />
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="px-3 pb-4 pt-0">
        <SidebarSeparator className="mx-0 mb-3" />
        <div className="rounded-2xl border border-sidebar-border/70 bg-sidebar-accent/40 p-3 group-data-[collapsible=icon]:hidden">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Live Match</p>
              <p className="mt-1 text-sm font-medium text-sidebar-foreground">U of S vs Calgary</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <TimerReset className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>62:34 elapsed</span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live
            </span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
