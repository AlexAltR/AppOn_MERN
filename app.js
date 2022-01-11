
const express = require("express")
const config = require("config") //подкючение модуля с константами
const mongoose = require("mongoose")

const app = express()


const PORT = config.get('port') || 5000


async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'),{ // Подключение к БД
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`)) // Запуск сервера

    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()


