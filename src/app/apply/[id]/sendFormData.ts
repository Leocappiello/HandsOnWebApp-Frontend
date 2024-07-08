import { Inputs } from "@/app/lib/applySchema";

export async function sendFormData(id: string, dataForm: Inputs) {
    const { username, applianceText, email } = dataForm;
    const res = await fetch('http://127.0.0.1:4000/appliances', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            jobId: id,
            username,
            email,
            applianceText
        }),
    })

    const data = await res.json()
    console.log(data);
    return Response.json(data)
}