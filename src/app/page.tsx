'use client';

import { PitchView } from './components/PitchView';
import { KPICard } from './components/KPICard';
import { XGChart } from './components/XGChart';
import { AIInsights } from './components/AIInsights';

export default function LiveDashboard() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl lg:text-3xl font-bold">Live Match Analytics</h1>
        <p className="text-muted-foreground text-sm">Real-time tactical insights and player performance</p>
      </div>

      {/* Bento Grid Layout - Optimized for iPad Landscape */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-6">
        {/* Top Row - 3 KPI Cards */}
        <div className="md:col-span-4 h-28 md:h-32">
          <KPICard 
            title="Live Ball Possession" 
            value="55%" 
            subtitle="↑ 3% from 1st half"
          />
        </div>
        <div className="md:col-span-4 h-28 md:h-32">
          <KPICard 
            title="Attacking Transition Speed" 
            value="8.4s" 
            subtitle="Average time to attack"
          />
        </div>
        <div className="md:col-span-4 h-28 md:h-32">
          <KPICard 
            title="Total Expected Goals" 
            value="1.84" 
            subtitle="xG generated this match"
          />
        </div>

        {/* Main Content Row - Pitch View + AI Insights */}
        <div className="md:col-span-8 h-[400px] md:h-[450px] lg:h-[500px]">
          <PitchView />
        </div>
        <div className="md:col-span-4 h-[400px] md:h-[450px] lg:h-[500px]">
          <AIInsights />
        </div>

        {/* Bottom Row - xG Chart (Full Width) */}
        <div className="md:col-span-12 h-[300px] md:h-[350px]">
          <XGChart />
        </div>
      </div>
    </div>
  );
}
