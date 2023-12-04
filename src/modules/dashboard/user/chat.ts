import { ref } from "vue";

export const Chat = () => {
    const chatresponse = ref({
       chatcreatemessage: '',
       chatcreatedata: '',
       chatlistmessage: '',
       chatlistdata: ''
    })

    const chatprocessing = ref({
        chatcreateloading: false,
        chatlistloading: false
    })

    const CreateChat = async (data: any) => {
        chatprocessing.value.chatcreateloading = true

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/chat/createroom`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            chatresponse.value.chatcreatemessage = data.message
            chatresponse.value.chatcreatemessage = data.data != undefined ? data.data : ''
            chatprocessing.value.chatcreateloading = false
        })
        .catch(err => {
            chatresponse.value.chatcreatemessage = "bad-request"
            chatresponse.value.chatcreatemessage = err.message
            chatprocessing.value.chatcreateloading = false
        })
    }

    const GetChatList = async (id: any) => {
        chatprocessing.value.chatlistloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/chat/listroomchats?adopterid=${id}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            chatresponse.value.chatlistdata = data.message
            chatresponse.value.chatlistdata = data.data != undefined ? data.data : ''
            chatprocessing.value.chatlistloading = false
        })
        .catch(err => {
            chatresponse.value.chatlistdata = "bad-request"
            chatresponse.value.chatlistdata = err.message
            chatprocessing.value.chatlistloading = false
        })
    }

    return { chatresponse, chatprocessing, CreateChat, GetChatList }
}