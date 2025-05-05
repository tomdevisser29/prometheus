import SignOut from "@/components/sign-out";
import { PrismaClient } from "@/app/generated/prisma";
import { Badge } from "@/components/ui/badge";

const prisma = new PrismaClient();

export default async function Dashboard() {
  const websites = await prisma.website.findMany({
    include: {
      provider: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <header className="flex justify-between p-6">
        Dashboard
        <SignOut />
      </header>
      <main className="p-6">
        <section className="flex flex-col gap-2">
          {websites.map((website) => {
            return (
              <p key={website.id} className="flex gap-2 items-center">
                {website.url}
                <Badge>{website.provider.name}</Badge>
              </p>
            );
          })}
        </section>
      </main>
    </>
  );
}
