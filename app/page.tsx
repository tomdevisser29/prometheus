import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <header className="flex justify-between p-8">
        <h1>Prometheus</h1>
        {!session ? (
          <Link href="/sign-in">To sign in page</Link>
        ) : (
          <Link href="/dashboard">Go to dashboard</Link>
        )}
      </header>
      <main className="p-8">
        <p>Your new quality assurance tool</p>
      </main>
      <footer className="p-8">
        <p>&copy; {new Date().getFullYear()} Prometheus</p>
      </footer>
    </>
  );
}
