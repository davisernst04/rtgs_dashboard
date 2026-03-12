import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cn } from './ui/utils';

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  className?: string;
}

export function KPICard({ title, value, subtitle, className }: KPICardProps) {
  return (
    <Card className={cn('h-full border-border/70 bg-card/80 shadow-sm backdrop-blur-sm', className)}>
      <CardHeader className="space-y-2 p-4 pb-2 md:p-5 md:pb-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground md:text-sm">
            {title}
          </CardTitle>
          <div className="rounded-full border border-primary/20 bg-primary/10 p-2 text-primary">
            <TrendingUp className="h-3.5 w-3.5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-end p-4 pt-0 md:p-5 md:pt-0">
        <div className="text-3xl font-semibold leading-none tracking-tight text-foreground md:text-4xl">
          {value}
        </div>
        {subtitle ? (
          <p className="mt-2 text-xs font-medium text-primary/90 md:text-sm">{subtitle}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
