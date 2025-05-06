import DashboardHeader from "@/components/dashboard-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { prisma } from "@/lib/prisma";
import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default async function Page() {
  const websiteCount = await prisma.website.count();
  const recentSites = await prisma.website.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <DashboardHeader pageTitle="Dashboard" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Card className="relative">
            <Badge variant="outline" className="absolute right-6 top-6">
              <span>+3</span>
              <TrendingUp />
            </Badge>
            <CardHeader>
              <CardTitle>Amount of websites </CardTitle>
              <CardDescription>
                Towards our current goal of 5000
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="font-bold text-5xl">{websiteCount}</span>
            </CardContent>
            <CardFooter>
              <Progress value={(websiteCount / 5000) * 100} />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recently added</CardTitle>
              <CardDescription>
                These sites may need more attention
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-1 items-start">
              <ul className="flex flex-col gap-1">
                {recentSites.map((site) => {
                  return (
                    <li key={site.id} className="flex flex-col">
                      {site.url}
                      <span className="text-muted-foreground text-sm">
                        {site.createdAt.toLocaleString()}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
          <div className="bg-muted/50 h-full rounded-xl" />
          <div className="bg-muted/50 h-full rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </>
  );
}
