'use client';

import { AlertCircle, Target, Timer, TrendingUp, Zap } from 'lucide-react';
import { KPICard } from '../components/KPICard';
import { PageHeader } from '../components/PageHeader';
import { PlayerList } from '../components/PlayerList';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function PlayerStats() {
  return (
    <div className="mx-auto max-w-[1600px] space-y-6">
      <PageHeader
        eyebrow="Squad"
        badge="Live conditioning view"
        title="Player Statistics"
        description="Individual performance metrics, fatigue indicators, and contribution summaries for rapid in-game decision making."
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
        <div className="h-32">
          <KPICard title="Total Distance Run" value="98.4km" subtitle="Team aggregate" />
        </div>
        <div className="h-32">
          <KPICard title="Avg Sprint Speed" value="28.7km/h" subtitle="Top speed recorded" />
        </div>
        <div className="h-32">
          <KPICard title="Pass Accuracy" value="82%" subtitle="↑ 5% from last match" />
        </div>
        <div className="h-32">
          <KPICard title="Shots on Target" value="12/18" subtitle="67% conversion" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <div className="h-[620px] lg:col-span-2 md:h-[700px]">
          <PlayerList />
        </div>

        <div className="space-y-4">
          <Card className="border-border/70 bg-card/80 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between gap-3">
              <CardTitle className="text-lg font-semibold">Top performers</CardTitle>
              <Badge variant="outline" className="border-primary/25 bg-primary/10 text-primary">Match impact</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: TrendingUp, label: 'Most Sprints', value: 'Johnson • 47 sprints' },
                { icon: Zap, label: 'Highest Work Rate', value: 'Martinez • 12.3km' },
                { icon: Target, label: 'Best Pass Accuracy', value: 'Chen • 94%' },
                { icon: Timer, label: 'Time in Attack Zone', value: 'Williams • 18:23' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/20 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/80 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Substitution alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert className="border-yellow-500/40 bg-yellow-500/8 text-yellow-50">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <AlertTitle className="text-yellow-500">High fatigue</AlertTitle>
                <AlertDescription>
                  <p className="font-medium text-foreground">#7 Martinez</p>
                  <p className="text-xs text-muted-foreground">Consider substitution near 70&apos;</p>
                </AlertDescription>
              </Alert>

              <Alert variant="destructive" className="bg-destructive/8">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Yellow card risk</AlertTitle>
                <AlertDescription>
                  <p className="font-medium text-foreground">#5 Thompson</p>
                  <p className="text-xs text-muted-foreground">Three fouls committed in central midfield duels</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
