import styles from './index.module.scss';
import {useState} from "react";

function RenderPagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // Количество страниц

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    }
    return (
        <div className={styles.flex_row20}>
            <div>
                <button
                    className={`${styles.btn3} ${currentPage === 1 ? styles.disabled : ''}`}
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
            </div>

            <div className={styles.pagesContainer} >
                {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
                    <button
                        key={page}
                        className={`${styles.btn3} ${currentPage === page ? styles.active : ''}`}
                        onClick={() => handlePageClick(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <div>
                <button
                    className={`${styles.btn4} ${currentPage === totalPages ? styles.disabled : ''}`}
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default RenderPagination;
