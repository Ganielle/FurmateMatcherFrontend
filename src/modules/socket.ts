import { io } from "socket.io-client"

const URL = process.env.VITE_API_URL

//@ts-ignore
export const socket = io(URL);