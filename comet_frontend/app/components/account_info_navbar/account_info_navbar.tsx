import { logout } from "@/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavbar() {
  const dispatch = useAppDispatch();
  const currentPath = usePathname();
  const user = useAppSelector((state) => state.userData);

  console.log(user);
  const handleSubmit = () => {
    dispatch(logout());
  };
  return (
    <nav className="flex mb-3 bg-emerald-200 h-12 items-center">
      <span
        className={[
          "inline-block flex-initial p-3",
          currentPath.includes("dashboard") ? " bg-emerald-300" : "",
        ].join("")}
      >
        <Link href={"dashboard"} replace>
          reflections
        </Link>
      </span>
      <span className="flex-1 px-1">
        <ul className="list-none">
          <li
            className={[
              "inline-block mr-2 p-3",
              currentPath.includes("accounts") ? " bg-emerald-300" : "",
            ].join("")}
          >
            <Link href="accounts" replace>
              accounts
            </Link>
          </li>
          <li
            className={[
              "inline-block mr-2 p-3",
              currentPath.includes("products") ? " bg-emerald-300" : "",
            ].join("")}
          >
            <Link href="products" replace>
              products
            </Link>
          </li>
        </ul>
      </span>
      <span className="px-1">
        <span className="mr-4">
          {user.firstName} {user.lastName}
          {","}
        </span>
        <button onClick={handleSubmit}>logout</button>
      </span>
    </nav>
  );
}
