import { ref } from "vue";

export const Chat = () => {
    const chatresponse = ref({
       chatcreatemessage: '',
       chatcreatedata: '',
       chatlistmessage: '',
       chatlistdata: '',
       chathistorymessage: '',
       chathistorydata: [{
        sender: {
            username: ''
        }
       }],
       chatsendmessage: '',
       chatsenddata: ''
    })

    const chatprocessing = ref({
        chatcreateloading: false,
        chatlistloading: false,
        chathistoryloading: false,
        chatsendloading: false
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

    const GetChatHistory = async (id: any) => {
        chatprocessing.value.chathistoryloading = true

        await fetch(`${import.meta.env.VITE_API_URL}/chat/roomchathistory?roomid=${id}`, {})
        .then(res => {
            return res.json()
        })
        .then(data => {
            chatresponse.value.chathistorymessage = data.message
            chatresponse.value.chathistorydata = data.data != undefined ? data.data : ''
            chatprocessing.value.chathistoryloading = false
        })
        .catch(err => {
            chatresponse.value.chathistorymessage = "bad-request"
            chatresponse.value.chathistorydata = err.message
            chatprocessing.value.chathistoryloading = false
        })
    }

    const SendChat = async (data: any) => {
        chatprocessing.value.chatsendloading = true

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        await fetch(`${import.meta.env.VITE_API_URL}/chat/sendchat`, requestOptions)
        .then(res => {
            return res.json()
        })
        .then(data => {
            chatresponse.value.chatsendmessage = data.message
            chatresponse.value.chatsenddata = data.data != undefined ? data.data : ''
            chatprocessing.value.chatsendloading = false
        })
        .catch(err => {
            chatresponse.value.chatcreatemessage = "bad-request"
            chatresponse.value.chatcreatemessage = err.message
            chatprocessing.value.chatsendloading = false
        })
    }

    return { chatresponse, chatprocessing, CreateChat, GetChatList, GetChatHistory, SendChat }
}