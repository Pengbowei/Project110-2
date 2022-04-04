
const {Client} = require('pg');
const insert = require('./insert')

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

module.exports = select = async(_id) =>{
    try{
        const res = await client.query("Select * FROM timeframe_1h Where symbol = '" + _id + "'")
        console.log(res.rows.length)
        if(res.rows.length == 0){
            insert(_id)
        }
        return res.rows
    }
    catch(err) {
        console.log(err.stack)
    }
}

// "Select * FROM timeframe_1h Where symbol = 'BTCUSDT"

