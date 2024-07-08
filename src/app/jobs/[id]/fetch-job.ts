export const findJob = async (id: string) => {
    return await fetch(`${process.env.API_URL}/jobs/${id}`)
        .then(response => response.json());
}