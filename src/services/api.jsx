import axios from "axios";
import { logout } from "../shared/hooks";

<<<<<<< HEAD
=======

>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/twitch/v1',
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const useUserDetails = localStorage.getItem('user')

<<<<<<< HEAD
        if(useUserDetails){
=======
        if (useUserDetails) {
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
            const token = JSON.parse(useUserDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    (e) => {
        return Promise.reject(e)
    }
)

<<<<<<< HEAD
export const login = async(data) => {
=======
export const login = async (data) => {
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

<<<<<<< HEAD
export const register = async(data) => {
=======
export const register = async (data) => {
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
    try {
        return await apiClient.post('/auth/register', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getChannels = async () => {
    try {
        return await apiClient.get('/channels')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

<<<<<<< HEAD
export const getChannelSettings = async () => {
=======
export const getChannelsSettingsm = async () => {
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
    try {
        return await apiClient.get('/settings/channel')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

<<<<<<< HEAD
export const changePassword = async (data) => {
    try {
        return await apiClient.patch('/settings/password', data)
    } catch (e) {
        return {
            error: true,
            e
=======
export const getFollowedChannels = async () => {
    try {
        return await apiClient.get('/channels/followed')
    } catch (error) {
        checkResponseStatus(error)
        return {
            error: true,
            e: error
        }
    }
}

export const changePassword = async (data) => {
    try {
        return await apiClient.patch('/settings/password', data)
    } catch (error) {
        return {
            error: true,
            e: error
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
        }
    }
}

export const updateChannelSettings = async (data) => {
    try {
        return await apiClient.put('/settings/channel', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

<<<<<<< HEAD
export const getFollowedChannels = async () => {
    try {
        return await apiClient.get('/channels/followed')
    } catch (error) {
        checkResponseStatus(e)
        return {
            error: true,
            e
        }
    }
}

export const getChannelDetails = async (channelId) => {
    try {
        return await apiClient.get(`/channels/${channelId}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const followChannel = async (channelId) => {
    try {
        return await apiClient.post(`/channels/follow`,{channelId})
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

const checkResponseStatus = (e) => {
    const responseStatus = e?.response.status

    if(responseStatus){
=======
const checkResponseStatus = (e) => {
    const responseStatus = e?.response.status

    if (responseStatus) {
>>>>>>> ced8c1673788d91d8a4dcc586718fcc825a845ce
        (responseStatus === 401 || responseStatus === 403) && logout()
    }
}