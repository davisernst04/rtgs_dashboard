'use client';

import { Target, TrendingUp, Trophy, Users } from 'lucide-react';
import { KPICard } from '../components/KPICard';
import { PageHeader } from '../components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { XGChart } from '../components/XGChart';

export default function MatchReports() {
  return (
    <div className="mx-auto max-w-[1600px] space-y-6">
      <PageHeader
        eyebrow="Review"
        badge="Post-match digest"
        title="Match Reports"
        description="Performance analytics, expected-goals context, and key moments packaged for coaches and analysts."
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
        <div className="h-32">
          <KPICard title="Match Score" value="2-1" subtitle="U of S leading" />
        </div>
        <div className="h-32">
          <KPICard title="Total Expected Goals" value="1.84" subtitle="vs Calgary 1.32 xG" />
        </div>
        <div className="h-32">
          <KPICard title="Win Probability" value="68%" subtitle="Based on current metrics" />
        </div>
        <div className="h-32">
          <KPICard title="Possession" value="55%" subtitle="↑ 3% from 1st half" />
        </div>
      </div>

      <div className="h-[350px] md:h-[400px]">
        <XGChart />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        <Card className="border-border/70 bg-card/80 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Trophy className="h-5 w-5" />
            </div>
            <CardTitle className="text-lg font-semibold">Team Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              ['Shots on Target', '12 / 18', 67],
              ['Pass Completion', '82%', 82],
              ['Tackles Won', '76%', 76],
              ['Aerial Duels', '58%', 58],
              ['Defensive Actions', '34 actions', 89],
            ].map(([label, value, progress]) => (
              <div key={label} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
                <Progress value={progress as number} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/80 shadow-sm">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <CardTitle className="text-lg font-semibold">Key Moments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { minute: "18'", phase: '1st Half', title: '⚽ GOAL - Williams', note: 'Header from corner • xG: 0.42', tone: 'primary' },
              { minute: "34'", phase: '1st Half', title: '⚽ GOAL - Calgary', note: 'Counter attack • xG: 0.68', tone: 'destructive' },
              { minute: "51'", phase: '2nd Half', title: '⚽ GOAL - Martinez', note: 'Long shot from edge of box • xG: 0.18', tone: 'primary' },
              { minute: "58'", phase: '2nd Half', title: '🟡 Yellow Card - Thompson', note: 'Tactical foul in midfield', tone: 'warning' },
            ].map((item) => (
              <div key={`${item.minute}-${item.title}`} className="flex gap-4">
                <div className="w-16 flex-shrink-0 text-center">
                  <div className={item.tone === 'warning' ? 'text-lg font-bold text-yellow-500' : item.tone === 'destructive' ? 'text-lg font-bold text-destructive' : 'text-lg font-bold text-primary'}>{item.minute}</div>
                  <div className="text-xs text-muted-foreground">{item.phase}</div>
                </div>
                <div className="flex-1">
                  <div
                    className={
                      item.tone === 'warning'
                        ? 'rounded-2xl border border-yellow-500/20 bg-yellow-500/6 p-3'
                        : item.tone === 'destructive'
                          ? 'rounded-2xl border border-destructive/20 bg-destructive/6 p-3'
                          : 'rounded-2xl border border-primary/20 bg-primary/6 p-3'
                    }
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {[
          { icon: TrendingUp, label: 'Corners', value: '8', note: 'vs Calgary 4' },
          { icon: Target, label: 'Offsides', value: '3', note: 'vs Calgary 5' },
          { icon: Users, label: 'Fouls', value: '11', note: 'vs Calgary 14' },
          { icon: Trophy, label: 'Saves', value: '6', note: 'Goalkeeper total' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="border-border/70 bg-card/80 p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                <p className="text-xs uppercase tracking-[0.22em]">{item.label}</p>
              </div>
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.note}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
