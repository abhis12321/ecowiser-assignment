import React from 'react';

export default function PaginationHandler({ totalNotes, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNotes / 6); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="w-[98%] max-w-[1000px] mx-auto p-2 flex items-center justify-center gap-2 overflow-auto">
            {pageNumbers.map((number) => (
                <div key={number} onClick={() => paginate(Math.max(6*(number-1) , 0))} className={`ring-1 rounded py-2 px-4 w-fit font-semibold ${currentPage === number ? "bg-green-600 text-white ring-red-950" : "hover:bg-blue-600/30 hover:ring-violet-600 hover:text-violet-900 cursor-pointer"}`}>
                    {number}
                </div>
            ))}
        </div>
    );
};

