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

    const GetPetList = async (id: any) => {
        petsprocessing.value.petlistloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/pets/listpetsfilter?id=${id}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petlistmessage = data.message
            petsreponse.value.petlistresponse = data.data != undefined ? data.data : ''
            petsprocessing.value.petlistloading = false
        })
        .catch(err => {
            userprofileresponse.value.petlistmessage = "bad-request"
            userprofileresponse.value.petlistresponse = err.message
            userprofileprocessing.value.petlistloading = false
        })
    }

    return { petsreponse, petsprocessing, GetPetList }
}