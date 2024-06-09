import React from 'react';

export default function PaginationHandler({ totalNotes , paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNotes / 6); i++) {
        pageNumbers.push(i);
    }

    return (
        <footer>
            <div className="w-[98%] max-w-[1000px] mx-auto p-2 flex items-center justify-center gap-2 overflow-auto">
                {pageNumbers.map((number) => (
                    <div key={number} className="ring-1 rounded py-2 px-4 w-fit font-semibold hover:bg-green-600/40 hover:ring-violet-600 hover:text-violet-900">
                        <p onClick={() => paginate(number)} className="">
                            {number}
                        </p>
                    </div>
                ))}
            </div>
        </footer>
    );
};

