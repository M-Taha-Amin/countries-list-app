import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Pagination = ({
  onPrevPage,
  onNextPage,
  isPrevActive,
  isNextActive,
  currentPage,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="text-center mt-14 text-textColor">
      <button
        className="page-btn rounded-lg"
        data-active={isPrevActive}
        data-dark-mode={theme === 'dark'}
        onClick={onPrevPage}>
        &lt;
      </button>
      <span className="page-btn current-page" data-dark-mode={theme === 'dark'}>
        {currentPage}
      </span>
      <button
        className="page-btn rounded-r-lg"
        data-active={isNextActive}
        data-dark-mode={theme === 'dark'}
        onClick={onNextPage}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
