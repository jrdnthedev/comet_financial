"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import { useAppSelector } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckingDetails() {
  const router = useRouter();
  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [router, token]);
  return (
    <div>
      <AccountNavbar />
      <section>test</section>
    </div>
  );
}
