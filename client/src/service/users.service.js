
import axios from 'axios'



export default class UserService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`,
            withCredentials: true
        })
    }

    editUser = (userId, userInfo) => this.apiHandler.put(`/editUser/${userId}`, userInfo)
    deleteUser = userId => this.apiHandler.delete(`/deleteUser/${userId}`)

    getUserFavCourses = userId => this.apiHandler.get(`/userFavCourses/${userId}`)
    updateFavCourses = (userId, favList) => this.apiHandler.put(`/editUser/updateFavCourses/${userId}`, favList)

    getUserFavTeachers = userId => this.apiHandler.get(`/userFavTeachers/${userId}`)
    updateFavTeachers = (userId, favList) => this.apiHandler.put(`/editUser/updateFavTeachers/${userId}`, favList)
}