import { Job } from '@/app/lib/definitions';
import JobItem from './JobItem';
import styles from './Joblist.module.css';

const JobList = ({jobs}: {jobs: Job[]}) => {
    return (
        <div className={styles.container}>
            <ul>
                {
                    jobs && jobs.map(job => (
                        <li key={job.id}>
                            <JobItem
                                id={job.id}
                                name={job.name}
                                description={job.companyName}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default JobList