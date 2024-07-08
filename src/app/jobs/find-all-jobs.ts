export const findAllJobs = async (page = '1', limit = '10') => {
    return await fetch(`${process.env.API_URL}/jobs?page=${page}&limit=${limit}`)
        .then(response => response.json());
}