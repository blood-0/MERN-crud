import User from '../models/user.model.js';


export const register = async (req, res) => {
    const {username, email, password,} = req.body

    try {
        const newUser = new User({
            username,
            email,
            password
        })
        const savedUser = await newUser.save()
        res.json(savedUser)        
    } catch (error) {
        console.log(error)
    }
    
    res.send('registrando')
};

export const login = (req, res) => {
    console.log(req.body)
    res.send('login')
}