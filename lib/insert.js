const {Client} = require('pg');
// 資料庫配置
var client = new Client(
    { 
        user:"postgres",
        database:"test",
        password:"",
        port:5432,
        // 擴充套件屬性
        max:20, // 連線池最大連線數
        idleTimeoutMillis:3000, // 連線最大空閒時間 3s
    }
)

client.connect()


const getOHLCV = require('../ccxt/ohlcv.js')
const ccxt = require('ccxt')

const binance = new ccxt.binance
const dateTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0)
const yesterday = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 0, 0, 0)

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// const dealOHLCV = async() => {
//     const ohlcv = await getOHLCV(binance, yesterday.getTime(), dateTime.getTime())
//     // console.log(ohlcv)

//     pool.connect().then(client=>{ 

//         for (let index = 0; index < 24; index++) {
//             var time = new Date(ohlcv[index][0])
//             var start_time = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate() + "/" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
//             var end_time = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate() + "/" + time.getHours() + ":" + (time.getMinutes() + 59) + ":" + time.getSeconds()
            
//             client.query("INSERT INTO timeframe_1h(symbol, start_time, end_time, open, high, low, close, volumn) VALUES($1::varchar, $2::varchar, $3::varchar, $4::decimal, $5::decimal, $6::decimal, $7::decimal, $8::decimal)", ["BTCUSDT", start_time, end_time, ohlcv[index][1], ohlcv[index][2], ohlcv[index][3], ohlcv[index][4], ohlcv[index][5]])
            
    
//             sleep(100)
//         }

//         console.log("Insert Success")
//         client.release()
//     })
    
// }


module.exports = insert = async(_id) =>{
    try{
        // const res = await client.query("Select * FROM timeframe_1h Where symbol = '" + _id + "'")
        // client.end()
        // return res.rows
        const ohlcv = await getOHLCV(_id, binance, yesterday.getTime(), dateTime.getTime())

        for (let index = 0; index < 24; index++) {
            var time = new Date(ohlcv[index][0])
            var start_time = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate() + "/" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
            var end_time = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate() + "/" + time.getHours() + ":" + (time.getMinutes() + 59) + ":" + time.getSeconds()

            client.query("INSERT INTO timeframe_1h(symbol, start_time, end_time, open, high, low, close, volumn) VALUES($1::varchar, $2::varchar, $3::varchar, $4::decimal, $5::decimal, $6::decimal, $7::decimal, $8::decimal)", [_id, start_time, end_time, ohlcv[index][1], ohlcv[index][2], ohlcv[index][3], ohlcv[index][4], ohlcv[index][5]])

        }

    }
    catch(err) {
        return err.stack
    }
}
    
// "Select * FROM timeframe_1h Where symbol = 'BTCUSDT"


