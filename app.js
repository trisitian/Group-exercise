const express = require('express');
const app = express();
const sort = require('./sortingHat.js');



app.use(express.static('public'));

app.get('/v1/studenthouses/:studenName', (req,res) => {
    const name = req.params.studenName;
    let houseName = ""
    sort(req.params.studenName)
    .then(results =>{
        houseName = results;
        console.log(results , 'ygjfg');
    })
    .then(() =>{
        res.send(houseName);
    })
    .catch(err => {
        console.error(err);
    })
    
})

const server = app.listen(8080, ()=>console.log('listneing'));
