const Pagination = ({
  onPrevPage,
  onNextPage,
  darkMode,
  isPrevActive,
  isNextActive,
  currentPage,
}) => {
  return (
    <div className="text-center mt-14 text-textColor">
      <button
        className="page-btn rounded-lg"
        data-active={isPrevActive}
        data-dark-mode={darkMode}
        onClick={onPrevPage}>
        &lt;
      </button>
      <span className="page-btn current-page" data-dark-mode={darkMode}>
        {currentPage}
      </span>
      <button
        className="page-btn rounded-r-lg"
        data-active={isNextActive}
        data-dark-mode={darkMode}
        onClick={onNextPage}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
