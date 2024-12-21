import { isAxiosError } from 'axios'
import api from '../config/axios'
import { User } from '../types'

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
