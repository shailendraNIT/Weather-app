const request=require('request')


const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=33de463eabdf07d3ff530746989369df&query='+latitude+','+longitude +'&units=f'

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback(" Can't connect to forecast services!:( ",undefined);
            
        }
        else if(response.body.error){
            callback("Can't find location,Try Searching another one",undefined);
        }
        else{
            const data='The current weather is '+response.body.current.weather_descriptions[0] +' and it feels like '+ response.body.current.feelslike +' outside';
            callback(undefined,data);
        }
    })
}



module.exports=forecast