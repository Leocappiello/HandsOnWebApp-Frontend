'use client';
import { useRouter } from "next/navigation";
import ButtonPagination from "./ButtonPagination";

const Pagination = ({currentPage, totalPages}: {currentPage: number, totalPages: number}) => {
    const router = useRouter();

    const handlePageChange = (page = 1, limit = 10) => {
        router.push(`/jobs?page=${page}&limit=${limit}`)
    }

    return (
        <div className='flex justify-center mt-5 items-center'>
            <ButtonPagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={() => handlePageChange(currentPage - 1)}
                symbol={'<'}
            />
            <p className="mx-5">{currentPage}</p>
            <ButtonPagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={() => handlePageChange(currentPage + 1)}
                symbol='>'
            />
        </div>
    )
}

export default Pagination