const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=b1285d59acdc0a52f04fa43184fa9873&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + 
                " It is currently " + body.current.temperature + " degress out.  It fells like " + 
                body.current.feelslike + " degrees out. The humadity is " + body.current.humidity + "%." 
            )
        }
    })
}

module.exports = forecast