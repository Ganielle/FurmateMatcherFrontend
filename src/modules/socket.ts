import { io } from "socket.io-client"

const URL = process.env.VITE_API_URL

export const socket = io(URL);