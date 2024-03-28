"use client";

import Login from "./components/login/login";
import { RootState } from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { useAppSelector } from "./lib/hooks";
import LoadingSpinner from "./components/loading_spinner/loading_spinner";

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
    <section>
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
      </div>
    </section>
  );
}
