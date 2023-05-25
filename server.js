const express = require('express')
const fs = require('fs')
const port = 3000

const app = express() 


//======== Routes Start Here =============//

app.get('/greeting/:name', (req, res) => {
    const WHATS_UP = req.params.name

    res.send(`Hello ${WHATS_UP}! It's so great to see you!`)
})

app.get('/:total/:tipPercentage', (req, res) => {
  const makeItRain1 = (req.params.total) 
  const makeItRain2 = (req.params.tipPercentage)
  
  const tipTotal =  (makeItRain2 / makeItRain1) * 100 

      res.send(`${tipTotal}`)

})

//==========Routes End Here =============//

app.listen(3000, () => { 
  console.log('Yes I am listening on port 3000')
})

