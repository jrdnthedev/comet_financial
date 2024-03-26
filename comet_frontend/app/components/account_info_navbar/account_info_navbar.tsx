import { useAppStore } from "@/app/lib/hooks";
import Link from "next/link";

export default function AccountNavbar() {
  const user = useAppStore().getState().user.user;
  return (
    <nav className="flex mb-3 bg-emerald-300 p-3">
      <span className="flex-initial w-28">{user.name}</span>
      <span className="flex-1 px-1">
        <ul className="list-none">
          <li className="inline-block mr-2">account</li>
          <li className="inline-block mr-2">savings</li>
          <li className="inline-block mr-2">checking</li>
          <li className="inline-block">tsfa</li>
        </ul>
      </span>
      <span className="px-1">
        <button>logout</button>
      </span>
    </nav>
  );
}
