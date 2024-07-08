export const findAllCompanies = async () => {
    return await fetch(`${process.env.API_URL}/companies`)
        .then(response => response.json());
}