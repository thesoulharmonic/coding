function getWeather() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
        resolve('Partly')
        //reject('Snow')
        }, 100)
        
        })
     }

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
        
            switch(weather){
            case 
            'Sunny':
            resolve('🌞')
            break;
            case
            'Snow':
            resolve('❄️')
            break;
            case
            'Rain':
            resolve('🌧')
            break;
            default: 
            reject('No Icon Found')
        }
    }, 100)
        }
        )
}


function onSuccess(data){
    console.log(`Success param ${data}`) 
}
function onError(error){
    console.log(`Error param ${error}`) 
}

getWeather()
.then(getWeatherIcon)
.then(onSuccess, onError)

    // function(data){
    // console.log(`First param ${data}`)
    // },
    // function(data){
    // console.log(`Second param ${data}`)
    // }
// )

