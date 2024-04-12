import { Account, AccountProps } from "@/app/interfaces/account/account";
import {
  depositFunds,
  transferToAccount,
  withdrawFromAccount,
} from "@/app/lib/features/user/userSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { TransactionType } from "@/app/utils/constants";
import { useEffect, useState } from "react";
import EmptyData from "../empty_data/empty_data";
import { toast } from "react-toastify";

export default function AccountTransfer(userAccounts: AccountProps) {
  const [amountToTransfer, setAmountToTransfer] = useState(0);
  const [amountToDeposit, setAmountToDeposit] = useState(0);
  const [accountToTransferToId, setaccountToTransferToId] = useState(1);
  const [accountToTransferFromId, setaccountToTransferFromId] = useState(1);
  const [accountToDepositTo, setAccountToDepositTo] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [accountList, setAccountList] = useState<AccountProps>({ data: [] });
  const dispatch = useAppDispatch();

  useEffect(() => {
    function setData() {
      setAccountList(userAccounts);
    }
    setData();
  }, [userAccounts]);

  const handleTransfer = () => {
    const existingItemIndex = accountList.data.findIndex(
      (account: any) => account.id === accountToTransferFromId
    );
    if (
      Number(amountToTransfer) > accountList.data[existingItemIndex].balance
    ) {
      toast(
        "not enough funds to make transfer, please check your account balance",
        {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      dispatch(
        transferToAccount({
          amount: amountToTransfer,
          id: accountToTransferToId,
          transferType: TransactionType.Transfer,
        })
      );
      dispatch(
        withdrawFromAccount({
          amount: amountToTransfer,
          id: accountToTransferFromId,
          transferType: TransactionType.Withdrawal,
        })
      );
    }
  };

  const handleDeposit = () => {
    console.log({
      amount: amountToDeposit,
      id: accountToDepositTo,
      transferType: TransactionType.Deposit,
    });
    dispatch(
      depositFunds({
        amount: amountToDeposit,
        id: accountToDepositTo,
        transferType: TransactionType.Deposit,
      })
    );
  };

  const handleSetDepositToId = (e: any) => {
    console.log(Number(e.target.value), e.target.value);
    setAccountToDepositTo(Number(e.target.value));
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleSetTransferToId = (e: any) => {
    setaccountToTransferToId(Number(e.target.value));
  };
  const handleSetTransferFromId = (e: any) => {
    setaccountToTransferFromId(Number(e.target.value));
  };
  return (
    <div className="rounded-md shadow-sm inline-block sm:w-96 p-3 border-2">
      {accountList.data.length ? (
        <div>
          <div className="flex mb-3">
            <button
              onClick={() => handleTabClick(0)}
              className={`cursor-pointer px-4 py-2 flex items-center justify-center flex-1 ${
                activeTab === 0 ? "bg-gray-200" : ""
              }`}
            >
              <h2>Quick Transfer</h2>
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={`cursor-pointer px-4 py-2 flex items-center justify-center flex-1 ${
                activeTab === 1 ? "bg-gray-200" : ""
              }`}
            >
              <h2>Deposit</h2>
            </button>
          </div>
          {activeTab === 0 ? (
            <div className="mb-5">
              <div className="mb-5">
                <label htmlFor="fromAccount">From Account:</label>
                <select
                  name="transferFromAccount"
                  id="fromAccount"
                  className="border-2 w-full inline-block  border-emerald-200 p-1 rounded-md"
                  onChange={handleSetTransferFromId}
                >
                  {accountList.data.map((account: Account, index: number) => (
                    <option value={account.id} key={index}>
                      {account.type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="toAccount">To Account:</label>

                <select
                  name="transferToAccount"
                  id="toAccount"
                  className="border-2 w-full inline-block border-emerald-200 p-1 rounded-md"
                  onChange={handleSetTransferToId}
                >
                  {accountList.data.map((account: Account, index: number) => (
                    <option value={account.id} key={index}>
                      {account.type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  value={amountToTransfer}
                  className="border-2 w-full inline-block  border-emerald-200 p-1 rounded-md"
                  onChange={(e: any) => setAmountToTransfer(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="mb-5">
              <div className="mb-5">
                <label htmlFor="depositToAccount">To Account:</label>

                <select
                  name="depositToAccount"
                  id="depositToAccount"
                  className="border-2 w-full inline-block border-emerald-200 p-1 rounded-md"
                  onChange={handleSetDepositToId}
                  onFocus={handleSetDepositToId}
                >
                  {accountList.data.map((account: Account, index: number) => (
                    <option value={account.id} key={index}>
                      {account.type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  value={amountToDeposit}
                  className="border-2 w-full inline-block  border-emerald-200 p-1 rounded-md"
                  onChange={(e: any) => setAmountToDeposit(e.target.value)}
                />
              </div>
            </div>
          )}

          {activeTab === 0 ? (
            <div>
              <button
                onClick={handleTransfer}
                className="p-3 w-full bg-emerald-100 rounded-md hover:bg-emerald-200"
              >
                transfer
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={handleDeposit}
                className="p-3 w-full bg-emerald-100 rounded-md hover:bg-emerald-200"
              >
                deposit
              </button>
            </div>
          )}
        </div>
      ) : (
        <EmptyData message="no account data" />
      )}
    </div>
  );
}
