'use client';

import { XGChart } from '../components/XGChart';
import { KPICard } from '../components/KPICard';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Trophy, TrendingUp, Users, Target } from 'lucide-react';

export default function MatchReports() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl lg:text-3xl font-bold">Match Reports</h1>
        <p className="text-muted-foreground text-sm">Performance analytics and expected goals timeline</p>
      </div>

      {/* Match Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="h-28">
          <KPICard 
            title="Match Score" 
            value="2-1" 
            subtitle="U of S leading"
          />
        </div>
        <div className="h-28">
          <KPICard 
            title="Total Expected Goals" 
            value="1.84" 
            subtitle="vs Calgary 1.32 xG"
          />
        </div>
        <div className="h-28">
          <KPICard 
            title="Win Probability" 
            value="68%" 
            subtitle="Based on current metrics"
          />
        </div>
        <div className="h-28">
          <KPICard 
            title="Possession" 
            value="55%" 
            subtitle="↑ 3% from 1st half"
          />
        </div>
      </div>

      {/* Expected Goals Chart */}
      <div className="mb-4 md:mb-6">
        <div className="h-[350px] md:h-[400px]">
          <XGChart />
        </div>
      </div>

      {/* Match Statistics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Team Performance */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-lg font-bold">Team Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Shots on Target</span>
                <span className="font-semibold">12 / 18</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Pass Completion</span>
                <span className="font-semibold">82%</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Tackles Won</span>
                <span className="font-semibold">76%</span>
              </div>
              <Progress value={76} className="h-2" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Aerial Duels</span>
                <span className="font-semibold">58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Defensive Actions</span>
                <span className="font-semibold">34 actions</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Key Moments */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-lg font-bold">Key Moments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-primary font-bold text-lg">18'</div>
                <div className="text-muted-foreground text-xs">1st Half</div>
              </div>
              <div className="flex-1">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <p className="font-semibold text-sm mb-1">⚽ GOAL - Williams</p>
                  <p className="text-muted-foreground text-xs">Header from corner • xG: 0.42</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-primary font-bold text-lg">34'</div>
                <div className="text-muted-foreground text-xs">1st Half</div>
              </div>
              <div className="flex-1">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <p className="font-semibold text-sm mb-1">⚽ GOAL - Calgary</p>
                  <p className="text-muted-foreground text-xs">Counter attack • xG: 0.68</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-primary font-bold text-lg">51'</div>
                <div className="text-muted-foreground text-xs">2nd Half</div>
              </div>
              <div className="flex-1">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <p className="font-semibold text-sm mb-1">⚽ GOAL - Martinez</p>
                  <p className="text-muted-foreground text-xs">Long shot from edge of box • xG: 0.18</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <div className="text-yellow-500 font-bold text-lg">58'</div>
                <div className="text-muted-foreground text-xs">2nd Half</div>
              </div>
              <div className="flex-1">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <p className="font-semibold text-sm mb-1">🟡 Yellow Card - Thompson</p>
                  <p className="text-muted-foreground text-xs">Tactical foul in midfield</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Match Stats */}
      <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <p className="text-muted-foreground text-xs">Corners</p>
          </div>
          <p className="font-bold text-2xl">8</p>
          <p className="text-muted-foreground text-xs">vs Calgary 4</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-primary" />
            <p className="text-muted-foreground text-xs">Offsides</p>
          </div>
          <p className="font-bold text-2xl">3</p>
          <p className="text-muted-foreground text-xs">vs Calgary 5</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-primary" />
            <p className="text-muted-foreground text-xs">Fouls</p>
          </div>
          <p className="font-bold text-2xl">11</p>
          <p className="text-muted-foreground text-xs">vs Calgary 14</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-primary" />
            <p className="text-muted-foreground text-xs">Saves</p>
          </div>
          <p className="font-bold text-2xl">6</p>
          <p className="text-muted-foreground text-xs">Goalkeeper</p>
        </Card>
      </div>
    </div>
  );
}
