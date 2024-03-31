import axios from 'axios'

//reviews CRUD
export async function getReviews() {
    const { data } = await axios.get(`/api/reviews`)
    return data
}

export async function postReview(review) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/reviews', review, authHeader)
    return data
}

export async function updateReview(review, id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/reviews/${id}`, review, authHeader)
    return data
}

export async function deleteReview(id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/reviews/${id}`, authHeader)
    return data
}

//signup & login
export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}

//get user by token
export async function getUserByToken() {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.get(`/api/users`, authHeader)
    return data
}