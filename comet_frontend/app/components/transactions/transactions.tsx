import { TransactionProps } from "@/app/interfaces/transaction/transaction";
import changeToCurrency from "@/app/utils/changeNumberToCurrencyUtil";
import { TransactionType } from "@/app/utils/constants";
import { formatDateMonthDDYYY } from "@/app/utils/dateFormatter";
import Image from "next/image";
import EmptyData from "../empty_data/empty_data";

export default function Transactions(account: TransactionProps) {
  return (
    <>
      {account.data?.transactions.length ? (
        <div className="rounded-md shadow-sm inline-block p-3 border-2 flex flex-col relative max-h-96">
          <div className="mb-3">
            <h3>Transactions</h3>
          </div>
          <div className="sm:min-w-72 md:min-w-96 min-h-0 overflow-y-auto flex-auto pb-8">
            <ul className="transaction_list flex flex-col-reverse">
              {account.data?.transactions.map((data: any, index: number) => (
                <li
                  className="transaction gap-2 mb-2 border-b-slate-300 flex"
                  key={index}
                >
                  <span className="inline-block self-center">
                    <Image
                      width={32}
                      height={32}
                      alt="credit card icon"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2aWwrCMBBFzzJ87ER0BSruxvovBTflY0s+fvyKCOlPSa0R2o7JPXAhpRmY3E4y+SgIIYQQQghRsQEuwANwiei9ljOwpoWDgWS7Vvnpy7tMtAoZcDGQWF86hQy4G0isL91CBrjMJANUATWGLkltAXQGoEMQdQHUBtE9AHMXoSewBSYNwc6/K/zc5AwoavNCsRVFigaMIwwYpWiAawkeejGdG0BEBVTP1hVchAzguwr4dc7fVsAkYgtMc2+DuxQNeHoTsr0IuQQlA1QBNYYuSW0BdAagQxB1AUy1wRkwjxhbj4k2oOLbsfWYaAPmwCJibD0m2gCXsGSAKiDjX2SuBDgbSKwvHUMGrA0k1peWNFAaSK5r7Wlh5f+jS+lMuPuyb/zyQgghhBCCzHgBfaiOejzs1lYAAAAASUVORK5CYII="
                    />
                  </span>
                  <span className="flex-1">
                    <p>{data.type}</p>
                    <p>{formatDateMonthDDYYY(data.date)}</p>
                  </span>
                  <span className="">
                    <p
                      className={
                        data.type !== TransactionType.Withdrawal
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {data.type !== TransactionType.Withdrawal ? "+ " : "- "}
                      {changeToCurrency(Number(data.amount))}
                    </p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="fadeOut bg-gradient-to-t from-white via-white to-transparent absolute right-0 left-0 bottom-3 h-14"></div>
        </div>
      ) : (
        <EmptyData message="no account data" />
      )}
    </>
  );
}
