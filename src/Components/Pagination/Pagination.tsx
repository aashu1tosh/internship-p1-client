import { PaginationInterface } from 'interface/global.interface';
import './Pagination.css';

interface PaginationProps {
    pagination: PaginationInterface,
    setTotalPages: React.Dispatch<React.SetStateAction<PaginationInterface>>
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>
}

const Pagination = ({ pagination, setTotalPages, setRefresh }: PaginationProps) => {
    // const num = [1, 2, 3, 4]

    const handleClick = (pageNumber: number) => {
        console.log(pageNumber, "is pressed")
        setTotalPages({ ...pagination, currentPage: pageNumber })
        setRefresh(prev => !prev)
    }
    return (
        <div className='pagination'>
            <h4>Pagination</h4>
            <div className='pagination-row'>
                {Array.from({ length: pagination?.totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <span onClick={() => handleClick(pageNumber)} className={pageNumber === pagination?.currentPage ? "underline-site-color margin-15" : "margin-15"} key={pageNumber}>{pageNumber}</span>
                ))}

            </div>
        </div>
    )
}

export default Pagination