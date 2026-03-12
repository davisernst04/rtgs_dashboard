import type { Metadata } from 'next';
import { Navigation } from './components/Navigation';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Soccer Dashboard GUI',
  description: 'Real-time tactical insights and player performance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-serif antialiased">
        <SidebarProvider>
          <Navigation />
          <SidebarInset>
            <main className="flex-1 p-3 md:p-4 lg:p-6">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
