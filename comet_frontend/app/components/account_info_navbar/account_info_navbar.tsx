import { Account } from "@/app/interfaces/account/account";
import { User } from "@/app/interfaces/user/user";
import { logout } from "@/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppStore } from "@/app/lib/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function AccountNavbar() {
  const dispatch = useAppDispatch();
  const store = useAppStore().getState();
  const currentPath = usePathname();
  const user: User = store.userData;

  const handleSubmit = () => {
    dispatch(logout());
  };
  return (
    <nav className="flex mb-3 bg-emerald-200 h-12 items-center">
      <span className="flex-initial w-28 pl-3">
        <Link href={"dashboard"} replace>
          {user.firstName} {user.lastName}
        </Link>
      </span>
      <span className="flex-1 px-1">
        <ul className="list-none">
          {user.accounts.map((account: Account, index: number) => (
            <li
              className={[
                "inline-block mr-2 p-3",
                currentPath.includes(account.type) ? " bg-emerald-300" : "",
              ].join("")}
              key={index}
            >
              <Link href={account.type} key={index} replace>
                {account.type}
              </Link>
            </li>
          ))}
        </ul>
      </span>
      <span className="px-1">
        <button onClick={handleSubmit}>logout</button>
      </span>
    </nav>
  );
}
