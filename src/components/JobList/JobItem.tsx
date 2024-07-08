import Link from 'next/link';

const JobItem = ({id, description, name}: {id: string, description: string, name: string}) => {
    return (
        <Link className="w-full" href={`/jobs/${id}`}>
            <div className="w-full lg:max-w-full lg:flex rounded-lg border-2 shadow-md mt-4 hover:border-purple-400 hover:cursor-pointer hover:shadow-sm bg-white">
                <div className="m-4 flex">
                    <div className="h-10 w-10 bg-purple-100 rounded-lg mr-4 flex justify-center items-center text-white">
                        <p className="text-purple-500">P</p>
                    </div>
                    <div>
                        <p className="capitalize">{name}</p>
                        <p className="text-sm text-slate-400">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default JobItem
