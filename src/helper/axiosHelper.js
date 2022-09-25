import axios from 'axios'

const apiEP = "https://jsonplaceholder.typicode.com/users"

export const fetchContacts = async () => {
    try {
        return axios.get(apiEP).then(res => res.data)
    } catch (error) {
        return error.message
    }
}