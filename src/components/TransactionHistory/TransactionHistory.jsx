import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.thead}>Type</th>
                    <th className={css.thead}>Amount</th>
                    <th className={css.thead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => (
                <tr key={item.id} className={css.row}>
                    <td className={css.item}>{item.type}</td>
                    <td className={css.item}>{item.amount}</td>
                    <td className={css.item}>{item.currency}</td>
                </tr>
              ))}
            </tbody>
        </table>
    );
}