import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
}

export function KPICard({ title, value, subtitle }: KPICardProps) {
  return (
    <Card className="h-full justify-center border-border">
      <CardHeader className="p-4 pb-1 md:p-6 md:pb-2">
        <CardTitle className="text-muted-foreground text-xs md:text-sm font-normal uppercase tracking-wider">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 md:p-6 md:pt-0 flex flex-col justify-center">
        <div className="text-3xl md:text-4xl font-bold mb-0.5 md:mb-1 leading-none text-foreground">{value}</div>
        {subtitle && (
          <div className="text-primary text-xs md:text-sm font-medium">
            {subtitle}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
