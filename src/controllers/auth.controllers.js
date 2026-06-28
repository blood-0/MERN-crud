import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';


export const register = async (req, res) => {
    const {username, email, password,} = req.body

    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        const savedUser = await newUser.save()
        return res.json({
            username: savedUser.username,
            email: savedUser.email,
        })        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error.message});
    }
};

export const login = (req, res) => {
    console.log(req.body)
    res.send('login')
}