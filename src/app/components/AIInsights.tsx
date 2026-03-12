"use client";

import { AlertCircle, Brain, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

export function AIInsights() {
  const insights = [
    {
      type: 'alert',
      title: 'Defensive Vulnerability Detected',
      message: 'Opponent is exploiting the right flank. Defensive convex hull is stretched. Recommend instructing the midfield to drop deeper to cover the right zone.',
      severity: 'high'
    },
    {
      type: 'tactical',
      title: 'Possession Pattern Analysis',
      message: 'Team is maintaining strong possession in the middle third but struggling to penetrate the final third. Consider width expansion.',
      severity: 'medium'
    }
  ];

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-2 p-4 md:p-6 pb-2 md:pb-2">
        <Brain className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        <CardTitle className="text-base md:text-lg font-semibold">AI Coach Insights</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 md:space-y-4 flex-1 overflow-y-auto p-4 md:p-6 pt-2 md:pt-2">
        {insights.map((insight, index) => (
          <Alert 
            key={index} 
            className="border-primary/20 bg-primary/5"
          >
            {insight.severity === 'high' ? (
              <AlertCircle className="w-4 h-4 text-primary" />
            ) : (
              <TrendingUp className="w-4 h-4 text-primary" />
            )}
            <AlertTitle className="text-primary font-bold">
              {insight.title}
            </AlertTitle>
            <AlertDescription>
              {insight.message}
            </AlertDescription>
          </Alert>
        ))}

        <div className="p-3 md:p-4 rounded-lg bg-muted/20 border border-muted flex items-start gap-2 md:gap-3 mt-4">
          <div className="w-2 h-2 rounded-full bg-primary mt-2 animate-pulse" />
          <div className="flex-1">
            <p className="text-muted-foreground text-xs md:text-sm italic">
              AI model analyzing live data stream...
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
