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

    const petspagination = ref({
        page: 0,
        limit: 5,
        totalPages: 0
    })

    const AddPet = async (data: any) => {
        petsprocessing.value.petaddloading = true

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: data
        }

        
        await fetch(`${import.meta.env.VITE_API_URL}/pets/addpet`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petaddmessage = data.message
            petsreponse.value.petaddresponse = data.data != undefined ? data.data : ''

            petsprocessing.value.petaddloading = false
        })
        .catch(err => {
            userprofileresponse.value.profilemessage = "bad-request"
            userprofileresponse.value.profileresponse = err.message
            userprofileprocessing.value.profileloading = false
        })
    }

    const GetPetList = async (id: any) => {
        petsprocessing.value.petlistloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/pets/listpets?page=${petspagination.value.page}&limit=${petspagination.value.limit}&id=${id}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petlistmessage = data.message
            petsreponse.value.petlistresponse = data.data != undefined ? data.data : ''
            petspagination.value.totalPages = data.pages
            petsprocessing.value.petlistloading = false
        })
        .catch(err => {
            userprofileresponse.value.petlistmessage = "bad-request"
            userprofileresponse.value.petlistresponse = err.message
            userprofileprocessing.value.petlistloading = false
        })
    }

    return { petsreponse, petsprocessing, petspagination, AddPet, GetPetList }
}