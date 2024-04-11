"use client";
import AccountNavbar from "@/app/components/account_info_navbar/account_info_navbar";
import LoadingSpinner from "@/app/components/loading_spinner/loading_spinner";
import { addProduct } from "@/app/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { RootState } from "@/app/lib/store";
import { AccountType } from "@/app/utils/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Products() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const products = [
    {
      id: 1,
      type: AccountType.Savings,
      number: Math.floor(100000000 + Math.random() * 900000000),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      type: AccountType.Checking,
      number: Math.floor(100000000 + Math.random() * 900000000),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      type: AccountType.CreditCard,
      number: Math.floor(100000000 + Math.random() * 900000000),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      type: AccountType.TSFA,
      number: Math.floor(100000000 + Math.random() * 900000000),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 5,
      type: AccountType.HighIinterestSavings,
      number: Math.floor(100000000 + Math.random() * 900000000),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  const { loading, error, token } = useAppSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [router, token]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <AccountNavbar />
      <section className="flex flex-col h-full items-center justify-center">
        {products.map((product: any, index: number) => (
          <div
            className="rounded-md shadow-sm mx-2 sm:mx-0 inline-block sm:w-96 md:w-2/3 p-3 border-2 mb-3"
            key={index}
          >
            <div className="mb-3">
              <p>{product.type}</p>
              <p>{product.description}</p>
            </div>
            <button
              className="p-3 w-full bg-emerald-100 rounded-md w-32 hover:bg-emerald-200"
              onClick={() => dispatch(addProduct(product))}
            >
              Add Product
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
