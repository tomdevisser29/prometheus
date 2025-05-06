import DashboardHeader from "@/components/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const automations = [
  {
    tag: "WPCO",
    message:
      "The environment variable is set to 'development', expected 'production'.",
    website: "https://example.com/",
    severity: "Low",
    provider: "Kinsta",
  },
  {
    tag: "WPBL",
    message: "Site found on blacklist.",
    severity: "Critical",
    website: "https://example.com/",
    provider: "GoDaddy",
  },
  {
    tag: "WPTH",
    message: "Found default theme 'twentytwentysomething'.",
    severity: "Low",
    website: "https://example.com/",
    provider: "SiteGround",
  },
  {
    tag: "WPPL",
    message:
      "Found plugin 'WooCommerce' with vulnerable version 5.6.2, updating it is advisable.",
    severity: "Medium",
    website: "https://example.com/",
    provider: "SiteGround",
  },
  {
    tag: "WPJS",
    message: "Found exposed API key in vendor.js.",
    severity: "Critical",
    website: "https://example.com/",
    provider: "GoDaddy",
  },
];

export default function Page() {
  return (
    <>
      <DashboardHeader pageTitle="Automation" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <main className="min-h-[100vh] flex-1 md:min-h-min">
          <Table>
            <TableCaption>A list of your recent automations.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Resolved</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Tag</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {automations.map((automation) => (
                <TableRow key={automation.tag}>
                  <TableCell>
                    <Checkbox className="border-black" />
                  </TableCell>
                  <TableCell className="flex gap-3 items-center">
                    {automation.message}
                    <Badge
                      variant={
                        automation.severity === "Critical"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {automation.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>{automation.website}</TableCell>
                  <TableCell>{automation.provider}</TableCell>
                  <TableCell className="font-medium">
                    <Badge variant="outline">{automation.tag}</Badge>
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
