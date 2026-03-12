'use client';

import { AIInsights } from '../components/AIInsights';
import { KPICard } from '../components/KPICard';
import { PageHeader } from '../components/PageHeader';
import { PitchView } from '../components/PitchView';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';

export default function TacticalView() {
  return (
    <div className="mx-auto max-w-[1600px] space-y-6">
      <PageHeader
        eyebrow="Shape"
        badge="AI tactical assistant"
        title="Tactical Analysis"
        description="Formation insights, pressure map trends, and scenario-based recommendations for live match management."
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:gap-4">
        <div className="h-32">
          <KPICard title="Formation Effectiveness" value="78%" subtitle="4-3-3 stability rating" />
        </div>
        <div className="h-32">
          <KPICard title="Defensive Line Height" value="42m" subtitle="Average from goal line" />
        </div>
        <div className="h-32">
          <KPICard title="Width of Attack" value="54m" subtitle="Average spread" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <div className="h-[500px] md:h-[600px] lg:col-span-2 lg:h-[700px]">
          <PitchView />
        </div>
        <div className="h-[500px] md:h-[600px] lg:h-[700px]">
          <AIInsights />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <Card className="border-border/70 bg-card/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Current Formation: 4-3-3</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              ['Offensive Pressure', 72],
              ['Defensive Coverage', 65],
              ['Width Utilization', 81],
              ['Midfield Control', 58],
            ].map(([label, value]) => (
              <div key={label} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-semibold">{value}%</span>
                </div>
                <Progress value={value as number} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Tactical Adjustments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              {
                title: 'Press Higher',
                text: "Push the defensive line to 48m to exploit Calgary's slow buildup.",
                tone: 'primary',
              },
              {
                title: 'Switch to 4-2-3-1',
                text: 'Add a holding midfielder to stabilise central control when protecting the lead.',
                tone: 'primary',
              },
              {
                title: 'Exploit Left Flank',
                text: "Calgary's right-back is fading — increase overlap volume down the left.",
                tone: 'warning',
              },
            ].map((item) => (
              <div
                key={item.title}
                className={
                  item.tone === 'warning'
                    ? 'rounded-2xl border border-yellow-500/20 bg-yellow-500/6 p-4'
                    : 'rounded-2xl border border-primary/20 bg-primary/6 p-4'
                }
              >
                <div className="flex items-start gap-3">
                  <div className={item.tone === 'warning' ? 'mt-1.5 h-2 w-2 rounded-full bg-yellow-500' : 'mt-1.5 h-2 w-2 rounded-full bg-primary'} />
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
