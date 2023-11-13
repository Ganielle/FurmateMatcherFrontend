import { ref } from "vue";

export const Login = () => {
    const loginresponse = ref({
        message: '',
        response: ''
    })

    const loginprocessing = ref({
        loading: false
    })

    const UserLogin = async(data: any) => {
        loginprocessing.value.loading = true;

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            loginresponse.value.message = data.message
            loginresponse.value.response = data.data != undefined ? data.data : ''

            loginprocessing.value.loading = false
        })
        .catch(err => {
            loginresponse.value.message = "bad-request"
            loginresponse.value.response = err.message
            loginprocessing.value.loading = false
        })
    }

    return { loginresponse, loginprocessing, UserLogin }
}