type PaginatorButtonProps = {
    currentPage: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    symbol: string;
};

const ButtonPagination: React.FC<PaginatorButtonProps> = ({ currentPage, totalPages, handlePageChange, symbol }) => {
    return (
        <button
            className={currentPage !== (symbol === '<' ? 1 : totalPages) ? 'cursor-pointer bg-purple-400  rounded-full text-white w-10 h-10 hover:bg-purple-500' : 'bg-purple-100 rounded-full w-10 h-10'}
            onClick={() => handlePageChange(symbol === '<' ? currentPage - 1 : currentPage + 1)}
            disabled={currentPage === (symbol === '<' ? 1 : totalPages)}
        >
            <div className="p-1">{symbol}</div>
        </button>
    );
};

export default ButtonPagination
