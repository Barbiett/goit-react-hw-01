import css from "./TransactionHistoryItem.module.css";
export default function TransactionHistoryItem({ transactions }) {
  return (
    <tbody className={css.container}>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={css.item}>{type}</td>
          <td className={css.item}>{amount}</td>
          <td className={css.item}>{currency}</td>
        </tr>
      ))}
    </tbody>
  );
}
