import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import transactions from "../../transactions.json";
export default function TransactionHistory() {
  return (
    <table className={css.container}>
      <thead className={css.header}>
        <tr>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>
      <TransactionHistoryItem transactions={transactions} />
    </table>
  );
}
