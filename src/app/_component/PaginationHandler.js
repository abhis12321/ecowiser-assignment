import React from 'react';

export default function PaginationHandler({ totalNotes , paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNotes / 6); i++) {
        pageNumbers.push(i);
    }

    return (
        <footer>
            <div className="pagination">
                {pageNumbers.map((number) => (
                    <div key={number} className="page-item">
                        <p onClick={() => paginate(number)} className="">
                            {number}
                        </p>
                    </div>
                ))}
            </div>
        </footer>
    );
};

