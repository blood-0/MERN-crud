import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('db is connected to mongoDB Atlas')
    } catch (error) {
        console.log(error)
    }
}  