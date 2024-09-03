const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "BOT BUG"
global.ownerName = "Mzy Youki"
global.botNumber = "628XXXX"
global.devNumber = ["628XXXX"]

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages

global.domain = "https://" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "NAMA SHOP" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})