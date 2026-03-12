'use client';

import { PlayerList } from '../components/PlayerList';
import { KPICard } from '../components/KPICard';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { TrendingUp, Timer, Zap, Target, AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '../components/ui/alert';

export default function PlayerStats() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl lg:text-3xl font-bold">Player Statistics</h1>
        <p className="text-muted-foreground text-sm">Individual performance metrics and analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="h-28">
          <KPICard 
            title="Total Distance Run" 
            value="98.4km" 
            subtitle="Team aggregate"
          />
        </div>
        <div className="h-28">
          <KPICard 
            title="Avg Sprint Speed" 
            value="28.7km/h" 
            subtitle="Top speed recorded"
          />
        </div>
        <div className="h-28">
          <KPICard 
            title="Pass Accuracy" 
            value="82%" 
            subtitle="↑ 5% from last match"
          />
        </div>
        <div className="h-28">
          <KPICard 
            title="Shots on Target" 
            value="12/18" 
            subtitle="67% conversion"
          />
        </div>
      </div>

      {/* Player Performance Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Player List */}
        <div className="lg:col-span-2 h-[600px] md:h-[700px]">
          <PlayerList />
        </div>

        {/* Player Insights Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Top Performers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Most Sprints</p>
                  <p className="text-muted-foreground text-xs">Johnson • 47 sprints</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Highest Work Rate</p>
                  <p className="text-muted-foreground text-xs">Martinez • 12.3km</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Best Pass Accuracy</p>
                  <p className="text-muted-foreground text-xs">Chen • 94%</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Timer className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Time in Attack Zone</p>
                  <p className="text-muted-foreground text-xs">Williams • 18:23</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Substitution Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Substitution Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert className="border-yellow-500/50 bg-yellow-500/5">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                <AlertTitle className="text-yellow-600 dark:text-yellow-500">High Fatigue</AlertTitle>
                <AlertDescription>
                  <p className="font-medium text-foreground">#7 Martinez</p>
                  <p className="text-xs">Consider substitution at 70'</p>
                </AlertDescription>
              </Alert>

              <Alert variant="destructive" className="bg-destructive/5">
                <AlertCircle className="w-4 h-4" />
                <AlertTitle>Yellow Card Risk</AlertTitle>
                <AlertDescription>
                  <p className="font-medium text-foreground">#5 Thompson</p>
                  <p className="text-xs">3 fouls committed</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
