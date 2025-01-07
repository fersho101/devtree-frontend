import { isAxiosError } from 'axios'
import api from '../config/axios'
import { ProfileForm, User } from '../types'

export async function getUser() {
    try {
        const { data } = await api<User>('/user')
        return data
    } catch (e) {
        if (isAxiosError(e) && e.response) {
            throw new Error(e.response.data.error)
        }
    }
}

export async function updateProfile(formData: ProfileForm) {
    try {
        const { data } = await api.patch<string>('/user', formData)
        return data
    } catch (e) {
        if (isAxiosError(e) && e.response) {
            throw new Error(e.response.data.error)
        }
    }
}

export async function uploadImage(file: File) {
    const formData = new FormData()
    formData.append('file', file)
    try {
        const { data } = await api.post('/user/image', formData)
        return data
    } catch (e) {
        if (isAxiosError(e) && e.response) {
            throw new Error(e.response.data.error)
        }
    }
}
