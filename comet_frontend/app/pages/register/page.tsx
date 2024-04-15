"use client";
import { registerUserAction } from "@/app/lib/features/user/userAction";
import { useAppDispatch } from "@/app/lib/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  // if (token) {
  //   router.push("/pages/dashboard");
  //   return null;
  // }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(registerUserAction({ email, password, firstName, lastName }));
  };
  return (
    <section className="flex h-full items-center justify-center">
      <div className="text-center">
        <div className="my-12">
          <div className="rounded-md shadow-sm mx-2 sm:mx-0 inline-block sm:w-96 p-3 border-emerald-500 border-2">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={firstName}
                placeholder="First Name"
                className="border-2 w-full inline-block mb-3 border-emerald-200 p-1 rounded-md"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                value={lastName}
                placeholder="Last Name"
                className="border-2 w-full inline-block mb-3 border-emerald-200 p-1 rounded-md"
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                className="border-2 w-full inline-block mb-3 border-emerald-200 p-1 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="border-2 w-full inline-block mb-3 border-emerald-200 p-1 rounded-md"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="p-3 w-full bg-emerald-100 rounded-md"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
