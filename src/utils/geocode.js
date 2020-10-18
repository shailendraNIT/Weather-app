const request=require('request')


const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhaWxlbmRyYW5pdCIsImEiOiJja2c2a294dTIwbTAxMnNyMDdycnA3eDUxIn0.emMhhLAWp6NaqEwc7hn0vw' ;

    request({url: url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect to location services!',undefined);
        }
        else if(response.body.features.length==0){
            callback("can't find location! Try searching another location",undefined);
        }
        else{
            const data={
                latitude : response.body.features[0].center[0],
                longitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            }
                
            callback(undefined,data);
        }
    })
}



module.exports=geocode;