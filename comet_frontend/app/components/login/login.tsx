import { loginAction } from "@/app/lib/features/auth/authActions";
import { useAppDispatch, useAppSelector, useAppStore } from "@/app/lib/hooks";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAction({ username, password }));
  };

  return (
    <div className="rounded-md shadow-sm inline-block w-96 p-3 border-emerald-500 border-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          className="border-2 w-full inline-block mb-3 border-emerald-200 p-1 rounded-md"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border-2 w-full inline-block mb-3 border-emerald-200 p-1 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="p-3 w-full bg-emerald-100 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}
