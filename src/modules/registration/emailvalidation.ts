import { ref } from "vue";

export const EmailValidaiton = () => {
    const validationresponse = ref({
       message: '',
       response: '' 
    })

    const validationprocessing = ref({
        loading: false
    })

    const Validation = async (data: any) => {
        validationprocessing.value.loading = true;

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/validation`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            validationresponse.value.message = data.message
            validationresponse.value.response = data.data != undefined ? data.data : ''

            validationprocessing.value.loading = false
        })
        .catch(err => {
            validationresponse.value.message = "bad-request"
            validationresponse.value.response = err.message
            validationprocessing.value.loading = false
        })
    }

    return { validationresponse, validationprocessing, Validation }
}