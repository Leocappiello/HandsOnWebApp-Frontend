export type Job = {
    id: string,
    name: string,
    description: string,
    companyName: string
}

export type Company = {
    job_id: string,
    job_companyName: string
}