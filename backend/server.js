
// import modules
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config();
const app = express();
app.use(cors());

//set PORT / API 
const PORT = process.env.PORT; 
var api_key = process.env.NASA_API_KEY;
var apod_url = process.env.APOD_URL;
var rover_url = process.env.ROVER_URL;

const rover_url_key = rover_url + api_key;
const apod_url_key = apod_url + api_key;


// Rover API
app.get('/api/rover', (req,res) => {
    fetch(rover_url_key)
    .then((response) => response.json())
    .then(body => {
       //console.log(body)
        const data = body.photos.slice(0,3);
        const newData = data.map(item => {
            return item.img_src
        })
        console.log(data);
        console.log(newData);
        res.send(newData)              
    }).catch(err => console.log(err))
});
       

// APOD API
app.get('/api/apod', (req,res) => {
     fetch(apod_url_key)
    .then((response) => response.json())
    .then(body => {
    console.log(body)
    res.send(body);
    }).catch(err => console.log(err))
 });

 // Error
app.use(function(req, res){
    res.status(404);
    res.send('We didn\'t find what you were looking for.');
})

app.use(function(req, res){
    res.status(500);
    res.send('Internal server error');
})


app.listen(PORT, () => console.log('Back end server running on PORT ${PORT}'));