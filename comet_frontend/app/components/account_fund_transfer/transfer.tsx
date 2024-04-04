import { Account, AccountProps } from "@/app/interfaces/account/account";
import {
  transferToAccount,
  withdrawFromAccount,
} from "@/app/lib/features/user/userSlice";
import { useAppDispatch } from "@/app/lib/hooks";
import { TransactionType } from "@/app/utils/constants";
import { useState } from "react";

export default function AccountTransfer(props: AccountProps) {
  const [amountToTransfer, setAmountToTransfer] = useState(0);
  const [accountToTransferTo, setAccountToTransferTo] = useState(0);
  const [accountToTransferFrom, setAccountToTransferFrom] = useState(0);
  const dispatch = useAppDispatch();

  const handleTransfer = () => {
    dispatch(
      transferToAccount({
        amount: amountToTransfer,
        id: accountToTransferTo,
        transferType: TransactionType.Transfer,
      })
    );
    dispatch(
      withdrawFromAccount({
        amount: amountToTransfer,
        id: accountToTransferFrom,
        transferType: TransactionType.Withdrawal,
      })
    );
  };

  const handleSetTransferToId = (e: any) => {
    setAccountToTransferTo(Number(e.target.value));
  };
  const handleSetTransferFromId = (e: any) => {
    setAccountToTransferFrom(Number(e.target.value));
  };
  return (
    <div className="rounded-md shadow-sm inline-block sm:w-96 p-3 border-2">
      <h2 className="mb-6">Quick Transfer</h2>
      <div className="mb-5">
        <label htmlFor="fromAccount">From Account:</label>
        <select
          name="transferFromAccount"
          id="fromAccount"
          className="border-2 w-full inline-block  border-emerald-200 p-1 rounded-md"
          onChange={handleSetTransferFromId}
        >
          {props.data.map((account: Account, index: number) => (
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
          {props.data.map((account: Account, index: number) => (
            <option value={account.id} key={index}>
              {account.type}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <input
          type="text"
          value={amountToTransfer}
          className="border-2 w-full inline-block  border-emerald-200 p-1 rounded-md"
          onChange={(e: any) => setAmountToTransfer(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={handleTransfer}
          className="p-3 w-full bg-emerald-100 rounded-md"
        >
          transfer
        </button>
      </div>
    </div>
  );
}
