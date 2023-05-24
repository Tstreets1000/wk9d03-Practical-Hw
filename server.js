const express = require('express')
const fs = require('fs')
const port = 3000

const app = express() 


//======== Routes Start Here =============//
app.get('/greeting/:name', (req, res) => {
    const whatsUp = req.params.name

    res.send(`Hello ${whatsUp}! It's so great to see you!`)
})

app.get('/greet/:name', (req, res) => {
  const whatsUp = req.params.name

  res.send(`Hi ${whatsUp}! It's so great to see you!`)
})




//==========Routes End Here =============//

app.listen(3000, () => { 
  console.log('Yes I am listening on port 3000')
})

