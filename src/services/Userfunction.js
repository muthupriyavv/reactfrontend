import axiosInstance from "./axiosInstance"

export const register = newUser => {
    console.log("USER OBJ:", newUser)
    return axiosInstance
        .post('/createUser', newUser)
        .then(res => {
            console.log("USER : ", res)
            console.log('Registered!!')
        })
        .catch(err => console.log(err))
}


export const login = user => {
    return axiosInstance
        .post('/login', {
            emailId: user.emailId,
            password: user.password

        })

        .then(res => {
            localStorage.setItem('usertoken', res.data.token)
            return res.data.token
        })
        .catch(err => {
            console.log(err)
        })

}