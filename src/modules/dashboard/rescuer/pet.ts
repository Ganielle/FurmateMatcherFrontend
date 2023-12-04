import { ref } from "vue";

export const Pets = () => {
    const petsreponse = ref({
       petaddmessage: '',
       petaddresponse: '',
       petlistmessage: '',
       petlistresponse: '',
       petadoptionlistmessage: '',
       petadoptionlistresponse: '',
       petapproverejectmessage: '',
       petapproverejectresponse: '',
       petremovemessage: '',
       petremoveresponse: '',
    })

    const petsprocessing = ref({
        petaddloading: false,
        petlistloading: false,
        petadoptionlistloading: false,
        petapproverejectloading: false,
        petremoveloading: false
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
            petsreponse.value.petaddmessage = "bad-request"
            petsreponse.value.petaddresponse = err.message
            petsprocessing.value.petaddloading = false
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
            petsreponse.value.petlistmessage = "bad-request"
            petsreponse.value.petlistresponse = err.message
            petsprocessing.value.petlistloading = false
        })
    }

    const GetAdoptionList = async(userid: any) => {
        petsprocessing.value.petadoptionlistloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/pets/adoptpetlist?page=${petspagination.value.page}&limit=${petspagination.value.limit}&userid=${userid}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petadoptionlistmessage = data.message
            petsreponse.value.petadoptionlistresponse = data.data != undefined ? data.data : ''
            petspagination.value.totalPages = data.pages
            petsprocessing.value.petadoptionlistloading = false
        })
        .catch(err => {
            petsreponse.value.petadoptionlistmessage = "bad-request"
            petsreponse.value.petadoptionlistresponse = err.message
            petsprocessing.value.petadoptionlistloading = false
        })
    }

    const ApproveRejectAdopter = async(data: any) => {
        petsprocessing.value.petapproverejectloading = true;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/pets/approverejectadopter`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petapproverejectresponse = data.data != undefined ? data.data : ''
            petsreponse.value.petapproverejectmessage = data.message
            petsprocessing.value.petapproverejectloading = false
        })
        .catch(err => {
            petsreponse.value.petapproverejectmessage = "bad-request"
            petsreponse.value.petapproverejectresponse = err.message
            petsprocessing.value.petapproverejectloading = false
        })
    }

    const PetRemove = async(data: any) => {
        petsprocessing.value.petremoveloading = true;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/pets/deletepet`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petremovemessage = data.message
            petsreponse.value.petremoveresponse = data.data != undefined ? data.data : ''
            petsprocessing.value.petremoveloading = false
        })
        .catch(err => {
            petsreponse.value.petremovemessage = "bad-request"
            petsreponse.value.petremoveresponse = err.message
            petsprocessing.value.petremoveloading = false
        })
    }

    return { petsreponse, petsprocessing, petspagination, AddPet, GetPetList, GetAdoptionList, ApproveRejectAdopter, PetRemove }
}