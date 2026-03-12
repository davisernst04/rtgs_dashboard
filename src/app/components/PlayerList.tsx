"use client";

import { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Target, Activity, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';

interface Player {
  id: number;
  name: string;
  position: string;
  shots: number;
  passesCompleted: number;
  totalPasses: number;
  xG: number;
}

export function PlayerList() {
  const [filter, setFilter] = useState('all');

  const players: Player[] = [
    { id: 1, name: 'J. Anderson', position: 'FW', shots: 5, passesCompleted: 18, totalPasses: 22, xG: 0.82 },
    { id: 2, name: 'M. Rodriguez', position: 'MF', shots: 3, passesCompleted: 34, totalPasses: 38, xG: 0.45 },
    { id: 3, name: 'K. Williams', position: 'MF', shots: 2, passesCompleted: 41, totalPasses: 45, xG: 0.28 },
    { id: 4, name: 'D. Martinez', position: 'DF', shots: 1, passesCompleted: 28, totalPasses: 31, xG: 0.12 },
    { id: 5, name: 'L. Thompson', position: 'DF', shots: 0, passesCompleted: 32, totalPasses: 35, xG: 0.05 },
    { id: 6, name: 'S. Chen', position: 'FW', shots: 4, passesCompleted: 15, totalPasses: 19, xG: 0.67 },
    { id: 7, name: 'A. Patel', position: 'MF', shots: 2, passesCompleted: 29, totalPasses: 33, xG: 0.31 },
    { id: 8, name: 'R. Johnson', position: 'DF', shots: 1, passesCompleted: 26, totalPasses: 28, xG: 0.08 },
    { id: 9, name: 'T. Davis', position: 'DF', shots: 0, passesCompleted: 24, totalPasses: 27, xG: 0.03 },
    { id: 10, name: 'E. Brown', position: 'GK', shots: 0, passesCompleted: 12, totalPasses: 14, xG: 0.00 },
  ];

  const filteredPlayers = filter === 'all' 
    ? players 
    : players.filter(p => p.position === filter);

  const getPositionVariant = (position: string) => {
    switch (position) {
      case 'FW': return 'destructive';
      case 'MF': return 'default';
      case 'DF': return 'secondary';
      case 'GK': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between p-4 md:p-6 pb-2 md:pb-2 flex-shrink-0">
        <CardTitle className="text-base md:text-lg font-semibold">Players</CardTitle>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-28 md:w-32">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="FW">Forwards</SelectItem>
            <SelectItem value="MF">Midfield</SelectItem>
            <SelectItem value="DF">Defense</SelectItem>
            <SelectItem value="GK">Goalkeeper</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 p-4 md:p-6 pt-2 md:pt-2">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-2 md:space-y-3">
            {filteredPlayers.map((player) => {
              const passAccuracy = Math.round((player.passesCompleted / player.totalPasses) * 100);
              
              return (
                <div 
                  key={player.id} 
                  className="bg-muted/30 rounded-lg md:rounded-xl p-3 md:p-4 hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/20"
                >
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm md:text-base flex-shrink-0">
                        {player.id}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm md:text-base truncate">{player.name}</div>
                        <Badge variant={getPositionVariant(player.position) as any} className="text-[10px] h-4 px-1.5">
                          {player.position}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="text-primary font-bold text-base md:text-lg">{player.xG.toFixed(2)}</div>
                      <div className="text-muted-foreground text-[10px] uppercase tracking-wider">xG</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
                      <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs md:text-sm font-semibold">{player.shots}</div>
                        <div className="text-muted-foreground text-[10px] truncate uppercase">Shots</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
                      <Activity className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs md:text-sm font-semibold truncate">
                          {player.passesCompleted}/{player.totalPasses}
                        </div>
                        <div className="text-muted-foreground text-[10px] truncate uppercase">Passes</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
                      <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs md:text-sm font-semibold">{passAccuracy}%</div>
                        <div className="text-muted-foreground text-[10px] truncate uppercase">Acc.</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
