import { Company } from "@/app/lib/definitions";
import CompanyCard from "./CompanyCard";

const CompanyList = ({companies}: {companies: Company[]}) => {
    return (
        <div className="flex">
            {
                companies && companies.map(company => (
                    <div key={company.job_id}>
                        <CompanyCard name={company.job_companyName} />
                    </div>
                ))
            }
        </div>
    )
}

export default CompanyList