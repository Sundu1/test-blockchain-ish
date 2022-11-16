import React, { useEffect, useState } from "react";
import { getChain } from "../model/getBlockChain";

const Transactions = () => {
  const [chain, setChain] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getChain(setChain);
  }, []);

  const handleToggle = (previous_hash) => {
    setTransactions([]);
    setModal(!modal);

    if (typeof previous_hash === "string") {
      const { transactions } = chain.chain.filter(
        (ch) => ch.previous_hash === previous_hash.toString()
      )[0];

      setTransactions(transactions);
    }
  };

  return (
    <>
      <div className="border-2 p-7 rounded-lg">
        <table className="">
          <thead>
            <tr>
              <th className="pb-2 w-[35em]">Previous_hash</th>
              <th className="pb-2 w-[15em]">Proof</th>
              <th className="pb-2 w-[15em]">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {chain.chain &&
              chain.chain.map((ch, i) => {
                return (
                  <tr key={i}>
                    <td
                      className="px-[10px] hover:text-blue-700 hover:cursor-pointer"
                      onClick={() => {
                        handleToggle(ch.previous_hash);
                      }}
                    >
                      {ch.previous_hash}
                    </td>
                    <td className="px-[10px]"> {ch.proof}</td>
                    <td className="px-[10px]">{ch.timestamp}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div
        className={
          modal ? "fixed top-0 left-0 h-full w-full backdrop-blur-sm" : "hidden"
        }
        onClick={handleToggle}
      >
        <div className="absolute h-[25em] w-[50em] bg-white rounded-lg left-[25%] top-[25%] border-2 overflow-auto">
          <table>
            <thead>
              <tr className="">
                <th className="p-3 px-5 w-[300px] text-center">Recipient</th>
                <th className="p-3 px-5 w-[300px] text-center">Sender</th>
                <th className="p-3 px-5 w-[300px] text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, i) => {
                return (
                  <tr key={i}>
                    <td className="p-3 px-5">{transaction.recipient}</td>
                    <td className="p-3 px-5">{transaction.sender}</td>
                    <td className="p-3 px-5">{transaction.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transactions;
