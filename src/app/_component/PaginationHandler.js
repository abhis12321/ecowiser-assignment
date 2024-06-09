// src/components/Pagination.js
import React from 'react';

export default function Pagination({ totalNotes , paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNotes / 6); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

