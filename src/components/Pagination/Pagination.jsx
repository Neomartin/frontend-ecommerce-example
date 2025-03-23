import './Pagination.css';

export default function Pagination({
  total = 21,
  perPage = 5,
  currentPage = 0,
  onPageChange,
}) {
  const totalPages = Math.ceil(total / perPage);

  const pageButtons = () => {
    const buttons = [];
    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination__button ${i === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageButtons()}
      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === Math.ceil(total / perPage)}
      >
        Next
      </button>
    </div>
  );
}
