import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imagePath: {type: String, required: true}
})

interface IPhoto extends Document{
    title: string
    description: string
    imagePath: string
}

export default model<IPhoto>('Photo', schema)