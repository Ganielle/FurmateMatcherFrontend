import { ref } from "vue";

export const Pets = () => {
    const petsreponse = ref({
       petaddmessage: '',
       petaddresponse: '',
       petlistmessage: '',
       petlistresponse: ''
    })

    const petsprocessing = ref({
        petaddloading: false,
        petlistloading: false
    })

    const GetPetListHome = async () => {
        petsprocessing.value.petlistloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/pets/listpethomepage`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petlistmessage = data.message
            petsreponse.value.petlistresponse = data.data != undefined ? data.data : ''
            petsprocessing.value.petlistloading = false
        })
        .catch(err => {
            petsreponse.value.petlistmessage = "bad-request"
            petsreponse.value.petlistresponse = err.message
            petsprocessing.value.petlistloading = false
        })
    }

    return { petsreponse, petsprocessing, GetPetListHome }
}