import mongoose from 'mongoose'

export const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://maliksaalim14:msw2002@cluster0.nyn8ith.mongodb.net/Zwigato')
    .then(() => console.log('DB connected'));
}
