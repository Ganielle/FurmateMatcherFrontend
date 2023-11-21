import { ref } from "vue";

export const UserProfile = () => {
    const userprofileresponse = ref({
       profilemessage: '',
       profileresponse: '',
       uploadmessage: '',
       uploadresponse: ''
    })

    const userprofileprocessing = ref({
        profileloading: false,
        upload: false
    })

    const UploadProfilePic = async (data: any) => {
        userprofileprocessing.value.upload = true;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: data
        }

        await fetch(`${import.meta.env.VITE_API_URL}/user/uploadpic`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            userprofileresponse.value.uploadmessage = data.message
            userprofileresponse.value.uploadresponse = data.data != undefined ? data.data : ''

            userprofileprocessing.value.upload = false
        })
        .catch(err => {
            userprofileresponse.value.uploadmessage = "bad-request"
            userprofileresponse.value.uploadresponse = err.message
            userprofileprocessing.value.upload = false
        })
    }

    const Profile = async (id: any) => {
        userprofileprocessing.value.profileloading = true

        
        await fetch(`${import.meta.env.VITE_API_URL}/user/userprofile?id=${id}`, {}).then(res => {
            return res.json()
        })
        .then(data => {
            userprofileresponse.value.profilemessage = data.message
            userprofileresponse.value.profileresponse = data.data != undefined ? data.data : ''

            userprofileprocessing.value.profileloading = false
        })
        .catch(err => {
            userprofileresponse.value.profilemessage = "bad-request"
            userprofileresponse.value.profileresponse = err.message
            userprofileprocessing.value.profileloading = false
        })
    }

    return { userprofileresponse, userprofileprocessing, UploadProfilePic, Profile }
}