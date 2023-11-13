import { ref } from "vue";

export const Registration = () => {
    const registerresponse = ref({
       message: '',
       response: '' 
    })

    const registerprocessing = ref({
        loading: false
    })

    const Register = async(data: any) => {
        registerprocessing.value.loading = true

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/user/createuser`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            registerresponse.value.message = data.message
            registerresponse.value.response = data.data != undefined ? data.data : ''

            registerprocessing.value.loading = false
        })
        .catch(err => {
            registerresponse.value.message = "bad-request"
            registerresponse.value.response = err.message
            registerprocessing.value.loading = false
        })
    }

    return { registerresponse, registerprocessing, Register }
}