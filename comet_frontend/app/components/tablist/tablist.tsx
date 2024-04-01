import { useState } from "react";
import Transactions from "../transactions/transactions";
import LoadingSpinner from "../loading_spinner/loading_spinner";

export default function TabList(tabs: any) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const convertToNumber = (value: number) => {
    return Number(value).toFixed(2);
  };
  return (
    <div>
      <div className="flex">
        {tabs.data?.map((tab: any, index: number) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 ${
              activeTab === index ? "bg-gray-200" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.type}
          </div>
        ))}
      </div>
      <div>
        <p>{tabs.data[activeTab]?.id}</p>
        <p>{tabs.data[activeTab]?.number}</p>
        <p>{tabs.data[activeTab]?.type}</p>
        <p>
          {"$"}
          {convertToNumber(tabs.data[activeTab]?.balance)}
        </p>
      </div>
      <div className="mt-4">
        <Transactions
          data={tabs.data[activeTab]}
          id={tabs.data[activeTab]?.id}
        />
      </div>
    </div>
  );
}
