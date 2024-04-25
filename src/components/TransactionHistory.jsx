import TransactionHistoryItem from "./TransactionHistoryItem";
import transactions from "../transactions.json";
export default function TransactionHistory() {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionHistoryItem transactions={transactions} />
    </table>
  );
}
