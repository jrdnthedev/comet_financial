import { logout } from "@/app/lib/features/auth/authSlice";
import { useAppDispatch } from "@/app/lib/hooks";

export default function AccountNavbar() {
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(logout());
  };
  return (
    <nav className="flex mb-3 bg-emerald-200 p-3">
      <span className="flex-initial w-28">Alan Smith</span>
      <span className="flex-1 px-1">
        <ul className="list-none">
          {/* {user.accounts.map((account: string, index: number) => (
            <li className="inline-block mr-2" key={index}>
              {account}
            </li>
          ))} */}
          <li className="inline-block mr-2">Savings</li>
          <li className="inline-block mr-2">Checking</li>
          <li className="inline-block mr-2">TSFA</li>
          <li className="inline-block mr-2">Credit Card</li>
        </ul>
      </span>
      <span className="px-1">
        <button onClick={handleSubmit}>logout</button>
      </span>
    </nav>
  );
}
