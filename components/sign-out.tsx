import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
}
