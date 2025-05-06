import DashboardHeader from "@/components/dashboard-header";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import { prisma } from "@/lib/prisma";

export default async function Page() {
  const websites = await prisma.website.findMany({
    include: {
      provider: true,
    },
  });

  return (
    <>
      <DashboardHeader pageTitle="Websites" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <main className="min-h-[100vh] flex-1 md:min-h-min">
          <Table>
            <TableCaption>A list of your recent automations.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Provider</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {websites.map((website) => (
                <TableRow key={website.id}>
                  <TableCell>{website.id}</TableCell>
                  <TableCell className="flex gap-3 items-center">
                    {website.url}
                  </TableCell>
                  <TableCell>{website.createdAt.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline">{website.provider.name}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
    </>
  );
}
