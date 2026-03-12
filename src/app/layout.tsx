import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Activity, Bell, PanelLeft, Radar } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import '../styles/index.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'RTGS Coach Dashboard',
  description: 'Real-time tactical insights and player performance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geist.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SidebarProvider defaultOpen>
          <Navigation />
          <SidebarInset className="bg-background">
            <div className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl">
              <header className="flex min-h-16 items-center justify-between gap-3 px-3 py-3 md:px-5 lg:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <SidebarTrigger className="h-9 w-9 rounded-xl border border-border/70 bg-card text-foreground shadow-sm hover:bg-accent" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-semibold tracking-tight">RTGS Match Intelligence</p>
                      <Badge variant="outline" className="hidden border-primary/30 bg-primary/10 text-primary md:inline-flex">
                        Live Session
                      </Badge>
                    </div>
                    <p className="hidden text-xs text-muted-foreground sm:block">
                      Mobile-first sidebar, live analytics, and shadcn-based UI primitives.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="hidden rounded-xl md:inline-flex">
                    <Bell className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hidden rounded-xl lg:inline-flex">
                    <Radar className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
                    <Activity className="h-3.5 w-3.5" />
                    <span>Tracking synced</span>
                    <PanelLeft className="hidden h-3.5 w-3.5 md:block" />
                  </div>
                </div>
              </header>
            </div>

            <main className="flex-1 px-3 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
