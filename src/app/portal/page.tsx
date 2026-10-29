import { PortalLogin } from "@/components/PortalLogin";
import { pageMeta } from "@/lib/meta";
import { getSeed } from "@/sanity/load";

const login = getSeed().forms.login;

export const metadata = pageMeta("Customer Portal - Coffee Society by Lavazza", login.intro);

export default function PortalPage() {
  return (
    <main>
      <PortalLogin title={login.title} intro={login.intro} redirectTo={login.redirectTo} />
    </main>
  );
}
