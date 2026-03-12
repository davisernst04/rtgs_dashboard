'use client';

import { Activity, ArrowUpRight, Clock3, ScanSearch } from 'lucide-react';
import { AIInsights } from './components/AIInsights';
import { KPICard } from './components/KPICard';
import { PageHeader } from './components/PageHeader';
import { PitchView } from './components/PitchView';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { XGChart } from './components/XGChart';

export default function LiveDashboard() {
  return (
    <div className="mx-auto max-w-[1600px] space-y-6">
      <PageHeader
        eyebrow="Matchday"
        badge="Second half in progress"
        title="Live Match Analytics"
        description="Real-time tactical insight for the touchline: monitor possession trends, defensive integrity, and expected goals without losing situational awareness."
        actions={
          <>
            <Button variant="outline" className="rounded-xl border-border/70 bg-card/70">
              <Clock3 className="h-4 w-4" />
              62:34 elapsed
            </Button>
            <Button className="rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">
              <ScanSearch className="h-4 w-4" />
              Review alerts
            </Button>
          </>
        }
      />

      <Card className="overflow-hidden border-primary/15 bg-gradient-to-r from-primary/12 via-card to-card shadow-sm">
        <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:p-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/15 text-primary hover:bg-primary/15">Live feed stable</Badge>
              <Badge variant="outline" className="border-border/70 bg-background/70">4-3-3 defensive shape</Badge>
            </div>
            <h2 className="text-xl font-semibold tracking-tight">U of S controls the middle third, but Calgary are still finding the right channel.</h2>
            <p className="max-w-3xl text-sm text-muted-foreground">
              The current model flags the right flank as the most vulnerable zone and recommends a slightly deeper midfield screen before the next substitution window.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:min-w-[280px]">
            <div className="rounded-2xl border border-border/70 bg-background/80 p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-xs uppercase tracking-[0.22em]">Momentum</span>
              </div>
              <p className="mt-2 text-2xl font-semibold">+12%</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/80 p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ArrowUpRight className="h-4 w-4 text-primary" />
                <span className="text-xs uppercase tracking-[0.22em]">Threat level</span>
              </div>
              <p className="mt-2 text-2xl font-semibold">Elevated</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
        <div className="h-36 xl:col-span-1">
          <KPICard title="Live Ball Possession" value="55%" subtitle="↑ 3% from the first half" />
        </div>
        <div className="h-36 xl:col-span-1">
          <KPICard title="Transition Speed" value="8.4s" subtitle="Average time from regain to attack" />
        </div>
        <div className="h-36 xl:col-span-1">
          <KPICard title="Total Expected Goals" value="1.84" subtitle="Best chance quality belongs to U of S" />
        </div>
        <div className="h-36 xl:col-span-1">
          <KPICard title="High Press Recoveries" value="9" subtitle="3 in the last 10 minutes" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12 xl:gap-5">
        <div className="xl:col-span-8 h-[420px] md:h-[500px] xl:h-[560px]">
          <PitchView />
        </div>
        <div className="xl:col-span-4 h-[420px] md:h-[500px] xl:h-[560px]">
          <AIInsights />
        </div>
        <div className="xl:col-span-12 h-[320px] md:h-[360px]">
          <XGChart />
        </div>
      </div>
    </div>
  );
}
