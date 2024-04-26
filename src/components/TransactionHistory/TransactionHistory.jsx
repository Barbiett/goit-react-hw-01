import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead className={css.header}>
        <tr>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionHistoryItem transactions={items} />
      </tbody>
    </table>
  );
}
