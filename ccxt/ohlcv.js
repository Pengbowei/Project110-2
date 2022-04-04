
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = getOHLCV = async(_id, exchange, yesterday, dateTime) => {
    
    var ohlcv = []

    while(yesterday < dateTime){
        ohlcv = await exchange.fetchOHLCV(_id, '1h', yesterday)

        sleep(exchange.rateLimit / 1000)

        yesterday += ohlcv.length * 60 * 60 * 1000
    }
    return ohlcv
}
