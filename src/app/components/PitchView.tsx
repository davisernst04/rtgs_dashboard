"use client";

import { useState } from 'react';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export function PitchView() {
  const [isHeatmap, setIsHeatmap] = useState(true);

  // Mock player positions (x, y as percentages)
  const players = [
    { id: 1, x: 15, y: 50, isDefender: true },
    { id: 2, x: 20, y: 25, isDefender: true },
    { id: 3, x: 20, y: 75, isDefender: true },
    { id: 4, x: 25, y: 40, isDefender: true },
    { id: 5, x: 25, y: 60, isDefender: true },
    { id: 6, x: 40, y: 35, isDefender: false },
    { id: 7, x: 40, y: 65, isDefender: false },
    { id: 8, x: 55, y: 50, isDefender: false },
    { id: 9, x: 65, y: 40, isDefender: false },
    { id: 10, x: 70, y: 55, isDefender: false },
  ];

  const defenders = players.filter(p => p.isDefender);

  // Create polygon points for defensive shape
  const defensePolygon = defenders
    .sort((a, b) => {
      const angleA = Math.atan2(a.y - 50, a.x - 20);
      const angleB = Math.atan2(b.y - 50, b.x - 20);
      return angleA - angleB;
    })
    .map(p => `${p.x}%,${p.y}%`)
    .join(' ');

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between p-4 md:p-6 pb-2 md:pb-2">
        <CardTitle className="text-base md:text-lg font-semibold">Live Pitch View</CardTitle>
        <div className="flex items-center gap-2 md:gap-3">
          <Label htmlFor="tracking-mode" className="text-xs md:text-sm text-muted-foreground hidden sm:block">
            Live Tracking
          </Label>
          <Switch
            id="tracking-mode"
            checked={isHeatmap}
            onCheckedChange={setIsHeatmap}
          />
          <Label htmlFor="tracking-mode" className="text-xs md:text-sm text-muted-foreground">
            Heatmap
          </Label>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4 md:p-6 pt-2 md:pt-2">
        <div className="relative h-full w-full bg-[#0a4d2e] rounded-lg md:rounded-xl overflow-hidden border-2 border-primary/20">
          {/* Soccer Pitch */}
          <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
            {/* Pitch markings */}
            <rect x="0" y="0" width="100" height="60" fill="#0a4d2e" />
            
            {/* Center line */}
            <line x1="50" y1="0" x2="50" y2="60" stroke="#0B6A41" strokeWidth="0.3" />
            
            {/* Center circle */}
            <circle cx="50" cy="30" r="8" fill="none" stroke="#0B6A41" strokeWidth="0.3" />
            <circle cx="50" cy="30" r="0.5" fill="#0B6A41" />
            
            {/* Left penalty area */}
            <rect x="0" y="18" width="15" height="24" fill="none" stroke="#0B6A41" strokeWidth="0.3" />
            <rect x="0" y="24" width="5" height="12" fill="none" stroke="#0B6A41" strokeWidth="0.3" />
            
            {/* Right penalty area */}
            <rect x="85" y="18" width="15" height="24" fill="none" stroke="#0B6A41" strokeWidth="0.3" />
            <rect x="95" y="24" width="5" height="12" fill="none" stroke="#0B6A41" strokeWidth="0.3" />
            
            {/* Goals */}
            <rect x="0" y="27" width="1" height="6" fill="#0B6A41" />
            <rect x="99" y="27" width="1" height="6" fill="#0B6A41" />
          </svg>

          {/* Heatmap overlay */}
          {isHeatmap && (
            <div className="absolute inset-0">
              {/* Hot zones on right side */}
              <div className="absolute top-[15%] right-[5%] w-32 h-32 bg-red-500/30 rounded-full blur-3xl" />
              <div className="absolute top-[35%] right-[8%] w-40 h-40 bg-orange-500/25 rounded-full blur-3xl" />
              <div className="absolute top-[55%] right-[6%] w-36 h-36 bg-yellow-500/20 rounded-full blur-3xl" />
              <div className="absolute top-[25%] right-[15%] w-28 h-28 bg-red-600/25 rounded-full blur-2xl" />
            </div>
          )}

          {/* Players and defensive shape */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
              {/* Defensive shape polygon */}
              {!isHeatmap && (
                <polygon
                  points={defensePolygon}
                  fill="#0B6A41"
                  fillOpacity="0.15"
                  stroke="#0B6A41"
                  strokeWidth="0.4"
                  strokeDasharray="1,1"
                />
              )}
              
              {/* Player dots */}
              {players.map(player => (
                <g key={player.id}>
                  <circle
                    cx={player.x}
                    cy={player.y}
                    r="1.2"
                    fill={player.isDefender ? '#0B6A41' : '#ffffff'}
                    stroke="#000"
                    strokeWidth="0.2"
                  />
                  <circle
                    cx={player.x}
                    cy={player.y}
                    r="2"
                    fill="none"
                    stroke={player.isDefender ? '#0B6A41' : '#ffffff'}
                    strokeWidth="0.15"
                    opacity="0.5"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
