import mongoose from "mongoose"

const dbUri = 'mongodb+srv://admin:admin123@blackcurrant.ut628be.mongodb.net/blackCurrant?retryWrites=true&w=majority'

export const connectToMongoose = async () => {
    await mongoose.connect(dbUri).then(() => console.log("Expense Manager Connected to MongoDB")).catch((e) => {console.log(e)})
}