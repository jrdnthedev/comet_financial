import { Account } from "@/app/interfaces/account/account";
import { User } from "@/app/interfaces/user/user";
import { logout } from "@/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppStore } from "@/app/lib/hooks";

export default function AccountNavbar() {
  const dispatch = useAppDispatch();
  const store = useAppStore().getState();
  const user: User = store.user;

  const handleSubmit = () => {
    dispatch(logout());
  };
  return (
    <nav className="flex mb-3 bg-emerald-200 h-12 items-center">
      <span className="flex-initial w-28 pl-3">
        {user.firstName} {user.lastName}
      </span>
      <span className="flex-1 px-1">
        <ul className="list-none">
          {user.accounts.map((account: Account, index: number) => (
            <li
              className={[
                "inline-block mr-2 p-3",
                index === 0 ? " bg-emerald-300" : "",
              ].join("")}
              key={index}
            >
              {account.type}
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
