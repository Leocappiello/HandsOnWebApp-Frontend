import Link from "next/link";
import { findJob } from "./fetch-job";

export default async function JobPage({params: {id}}: {params: {id: string}}) {
    const jobData = await findJob(id);

    return (
        <div className="bg-purple-50 rounded-lg shadow-md w-1/2 min-w-96 h-full">
            {
                jobData &&
                <div className="h-full flex flex-col">
                    <div className="flex bg-purple-100 w-full p-4 rounded-t-lg text-center flex-col items-center h-1/2">
                        <div className="h-20 w-20 bg-purple-300 rounded-md mb-3"></div>
                        <h2 className="font-bold text-purple-500">{jobData.name}</h2>
                        <h5>{jobData.companyName}</h5>
                    </div>
                    <div className="h-1/2 flex flex-col justify-around px-5">
                        <h4 className="text-purple-500">Description:</h4>
                        <p>{jobData.description}</p>
                        
                        <div className="flex justify-end">
                            <Link href={`/apply/${id}`}>
                                <button className="bg-slate-700 text-white py-1 px-2 rounded-sm hover:bg-slate-900 my-5">Apply for this job</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}