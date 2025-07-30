import React from 'react'

const TransactionItem = ({ title, type, amount, date }) => {
  // Dynamic color classes based on transaction type
  const isIncome = type.toLowerCase() === 'income';
  const typeColorClass = isIncome
    ? 'bg-green-100 text-green-800'
    : 'bg-red-100 text-red-800';

  // Format amount as USD
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4 font-medium text-primary whitespace-nowrap">
        {title}
      </td>
      <td className="px-6 py-4 text-secondary">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColorClass}`}>
          {type}
        </span>
      </td>
      <td className="px-6 py-4 text-secondary text-right whitespace-nowrap">
        {formattedAmount}
      </td>
      <td className="px-6 py-4 text-secondary whitespace-nowrap">
        {date}
      </td>
      <td className="px-6 py-4 text-right">
        <button className="text-secondary hover:text-red-600 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-archive-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TransactionItem;
