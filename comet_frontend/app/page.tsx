"use client";

import Login from "./components/login/login";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useAppSelector } from "./lib/hooks";
import LoadingSpinner from "./components/loading_spinner/loading_spinner";
import Link from "next/link";

export default function Home() {
  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );
  const router = useRouter();
  if (token) {
    router.push("/pages/dashboard");
    return null;
  }

  return (
    <section className="flex h-full items-center justify-center">
      <div className="text-center">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="my-12">
            <h1>Home Page</h1>
            <p>welcome to comet banking app! please register or login.</p>
            <Login />
          </div>
        )}
        <div>
          <Link
            href={"/pages/register"}
            replace
            className="text-emerald-700 font-bold"
          >
            register
          </Link>
        </div>
      </div>
    </section>
  );
}
