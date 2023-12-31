import { ref } from "vue";

export const Pets = () => {
    const petsreponse = ref({
       petaddmessage: '',
       petaddresponse: '',
       petlistmessage: '',
       petlistresponse: '',
       petlikemessage: '',
       petlikeresponse: '',
       petlikelistmessage: '',
       petlikelistresponse: '',
       petdetailsmessage: '',
       petdetailsresponse: [{
        adopterDetails: [{}],
        userDetails: [{
            username: ''
        }],
        ownerDetails: [{}]
       }],
       petadoptionrequestmessage: '',
       petadoptionrequestdata: '',
       pethistoryaddmessage: "",
       pethistoryadddata: "",
       pethistorylistmessage: "",
       pethistorylistdata: ""
    })

    const petsprocessing = ref({
        petaddloading: false,
        petlistloading: false,
        petlikeloading: false,
        petlikelistloading: false,
        petdetailsloading: false,
        petadoptionrequestloading: false,
        pethistoryaddloading: false,
        pethistorylistloading: false
    })

    const petspagination = ref({
        page: 0,
        limit: 5,
        totalPages: 0
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
            petsreponse.value.petlistmessage = "bad-request"
            petsreponse.value.petlistresponse = err.message
            petsprocessing.value.petlistloading = false
        })
    }

    const GetPetCustomFilterList = async(data: any) => {
        petsprocessing.value.petlistloading = true

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/pets/listpetadoptercustomfilter`, requestOptions)
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

    const PetLike = async (petid: any, userid: any) => {
        petsprocessing.value.petlikeloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/pets/likepet?petid=${petid}&userid=${userid}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petlikemessage = data.message
            petsprocessing.value.petlikeloading = false
        })
        .catch(err => {
            petsreponse.value.petlikemessage = "bad-request"
            petsreponse.value.petlikeresponse = err.message
            petsprocessing.value.petlikeloading = false
        })
    }

    const PetLikeList = async (userid: any) => {
        petsprocessing.value.petlikelistloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/pets/likepetlist?userid=${userid}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petlikelistmessage = data.message
            petsreponse.value.petlikelistresponse = data.data
            petsprocessing.value.petlikelistloading = false
        })
        .catch(err => {
            petsreponse.value.petlikelistmessage = "bad-request"
            petsreponse.value.petlikelistresponse = err.message
            petsprocessing.value.petlikelistloading = false
        })
    }

    const PetDetailsView = async(petid: any, userid: any) => {
        petsprocessing.value.petdetailsloading = true;

        await fetch(`${import.meta.env.VITE_API_URL}/pets/petdetails?petid=${petid}&userid=${userid}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petdetailsmessage = data.message
            petsreponse.value.petdetailsresponse = data.data
            petsprocessing.value.petdetailsloading = false
        })
        .catch(err => {
            petsreponse.value.petdetailsmessage = "bad-request"
            petsreponse.value.petdetailsresponse = err.message
            petsprocessing.value.petdetailsloading = false
        })
    }

    const AdoptionRequest = async(data: any) => {
        petsprocessing.value.petadoptionrequestloading = true

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/pets/requestadoptpet`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.petadoptionrequestmessage = data.message
            petsreponse.value.petadoptionrequestdata = data.data != undefined ? data.data : ''
            petsprocessing.value.petadoptionrequestloading = false
        })
        .catch(err => {
            petsreponse.value.petadoptionrequestmessage = "bad-request"
            petsreponse.value.petadoptionrequestdata = err.message
            petsprocessing.value.petadoptionrequestloading = false
        })
    }

    const AddPetViewHistory = async(data: any) => {
        petsprocessing.value.pethistoryaddloading = true

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/pets/addhistoryviewpet`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.pethistoryaddmessage = data.message
            petsreponse.value.pethistoryadddata = data.data != undefined ? data.data : ''
            petsprocessing.value.pethistoryaddloading = false
        })
        .catch(err => {
            petsreponse.value.pethistoryaddmessage = "bad-request"
            petsreponse.value.pethistoryadddata = err.message
            petsprocessing.value.pethistoryaddloading = false
        })
    }

    const GetPetHistoryList = async (id: any) => {
        petsprocessing.value.pethistoryaddloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/pets/viewhistorypet?page=${petspagination.value.page}&limit=${petspagination.value.limit}&userid=${id}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            petsreponse.value.pethistorylistmessage = data.message
            petsreponse.value.pethistoryadddata = data.data != undefined ? data.data : ''
            petspagination.value.totalPages = data.pages
            petsprocessing.value.pethistoryaddloading = false
        })
        .catch(err => {
            petsreponse.value.pethistorylistmessage = "bad-request"
            petsreponse.value.pethistoryadddata = err.message
            petsprocessing.value.pethistoryaddloading = false
        })
    }

    return { petsreponse, petspagination, petsprocessing, GetPetList, GetPetCustomFilterList, PetLike, PetLikeList, PetDetailsView, AdoptionRequest, AddPetViewHistory, GetPetHistoryList }
}