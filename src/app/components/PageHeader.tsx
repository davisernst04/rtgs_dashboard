import { ReactNode } from 'react';
import { Badge } from './ui/badge';
import { cn } from './ui/utils';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  badge?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  badge,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between', className)}>
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {eyebrow ? (
            <Badge variant="outline" className="border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </Badge>
          ) : null}
          {badge ? (
            <Badge className="bg-primary/15 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/15">
              {badge}
            </Badge>
          ) : null}
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">{title}</h1>
          <p className="max-w-3xl text-sm text-muted-foreground lg:text-base">{description}</p>
        </div>
      </div>

      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
