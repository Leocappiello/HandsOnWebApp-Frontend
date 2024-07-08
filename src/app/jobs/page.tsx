import CompanyList from "@/components/CompanyList/CompanyList";
import JobList from "@/components/JobList/JobList";
import Pagination from "@/components/Pagination/Pagination";
import { findAllCompanies } from "./find-all-companies";
import { findAllJobs } from "./find-all-jobs";


const Jobs = async ({searchParams} : {searchParams: {page: string, limit: string}}) => {
    const { page, limit } = searchParams;

    // this can be modified to concurrent Promises
    const {data: jobs, currentPage, totalPages} = await findAllJobs(page, limit);
    const companies = await findAllCompanies();

    return (
        <div>
            <h4 className="my-3">Company List</h4>
            <CompanyList companies={companies} />

            <h4 className="mt-5">Job List</h4>
            <JobList jobs={jobs} />
            <Pagination currentPage={+currentPage} totalPages={totalPages}/>
        </div>
    )
}

export default Jobs
