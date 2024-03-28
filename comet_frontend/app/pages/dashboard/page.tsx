"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import Account from "@/app/components/accounts/accounts";
import { useAppSelector } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";

export default function DashBoard() {
  const router = useRouter();
  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );

  if (!token) {
    router.push("/");
    return null;
  }

  return (
    <section>
      <AccountNavbar />
      <div>
        <Account />
      </div>
    </section>
  );
}
