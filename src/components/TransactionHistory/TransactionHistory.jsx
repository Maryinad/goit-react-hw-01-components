import css from './TransactionHistory.module.css';
import { getRandomHexColor } from 'components/helpers/GetRandomColor';
import PropTypes from 'prop-types';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.title}>
        <tr className={css.titleHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr
            className={css.titleBody}
            style={{ backgroundColor: getRandomHexColor() }}
            key={id}
          >
            <td className={css.itemBody}>{type}</td>
            <td className={css.itemBody}>{amount}</td>
            <td className={css.itemBody}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
