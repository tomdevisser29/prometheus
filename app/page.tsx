import { auth } from "@/auth";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default async function Home() {
  const session = await auth();

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <Card className="overflow-hidden p-0">
          <CardHeader className="flex justify-between p-8">
            <h1>Prometheus</h1>
            {!session ? (
              <Link href="/sign-in">To sign in page</Link>
            ) : (
              <Link href="/dashboard">Go to dashboard</Link>
            )}
          </CardHeader>
          <CardContent className="p-8 flex justify-center items-center">
            <p>Your new quality assurance tool</p>
          </CardContent>
          <CardFooter className="p-8">
            <p>&copy; {new Date().getFullYear()} Prometheus</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
