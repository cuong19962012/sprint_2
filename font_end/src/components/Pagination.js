export function Pagination({ totalPages, pageNumber, handlePageNumber }) {
    let item = [];
    for (let i = 0; i < totalPages; i++) {
        if (i === pageNumber)
            item.push(<li class="page-item active"><button onClick={() => handlePageNumber(i)} class="page-link bg-transparent" style={{ color: '#ffffff' }}> {i + 1} </button></li>);
        else
            item.push(<li class="page-item"><button class="page-link bg-transparent" onClick={() => handlePageNumber(i)} style={{ color: '#ffffff' }} > {i + 1} </button></li>);
    }
    return (
        <nav aria-label="Page navigation border-0" >
            <ul class="pagination ">

                {pageNumber > 0 ?
                    < li class="page-item">
                        <button class="page-link bg-transparent" onClick={() => handlePageNumber(pageNumber - 1)} aria-label="Previous">
                            <span style={{ color: '#ffffff' }} aria-hidden="true">&laquo;</span>
                        </button>
                    </li> :
                    < li class="page-item">
                        <button class="page-link bg-transparent" disabled aria-label="Previous">
                            <span style={{ color: '#ffffff' }} aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                }

                {
                    item
                }

                {pageNumber + 1 < totalPages ?
                    <li class="page-item">
                        <button onClick={() => handlePageNumber(pageNumber + 1)} class="page-link bg-transparent" aria-label="Next">
                            <span style={{ color: '#ffffff' }} aria-hidden="true">&raquo;</span>
                        </button>
                    </li> :
                    <li class="page-item">
                        <button class="page-link bg-transparent" disabled aria-label="Next">
                            <span style={{ color: '#ffffff' }} aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                }
            </ul>
        </nav >
    );
}