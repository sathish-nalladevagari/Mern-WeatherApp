
const path = require('path')

const Express = require('express');
const cors = require('cors');
const axios = require('axios')

const app = Express()
const port = 5000 || process.env.port
app.use(Express.json())
app.use(cors())
app.use(Express.static(path.join(__dirname, 'client/weatherapp/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/weatherapp/dist', 'index.html'));
  });

  app.get('/weather', async (req, res) => {
    const cityName = req.query.city
    console.log(cityName)
  
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: cityName},
        headers: {
          'X-RapidAPI-Key': 'e183d852f9mshd3798318ed0e8c4p1e8dc1jsn18f2d508c2db',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
        
          res.status(200).json(response.data)
      } catch (error) {
          console.error(error);
          res.status(400).json("Error occured in searching the city try again")
      }
  });



 





app.listen(port,()=>{
    console.log("server started")
})