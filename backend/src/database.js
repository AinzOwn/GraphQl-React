import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://<User>:<Password>@cluster0-n2edg.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        console.log('>>> DB esta conectada');
    } catch (error) {
        console.log('Algo ha ido mal... O intenta cambiar el usuario y contraseña :b');
    }
}