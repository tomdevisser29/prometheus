import SignOut from "@/components/sign-out";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <header className="flex justify-between p-8">
        <h1>Prometheus</h1>
        {!session ? <a href="/sign-in">Sign in</a> : <SignOut />}
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
