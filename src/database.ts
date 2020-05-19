import { connect } from 'mongoose'

export async function startConnection(){
    try{
        await connect('mongodb+srv://<username>:<password>@photo-gallery-api-kyfvi.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("Database is connected")
    }catch(e){
        console.log(e)
    }
}