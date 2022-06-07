const express = require('express')
const app = express()

//Date
let date = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let today = days[date.getDay()];

app.listen(3001)

// public files
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use((req,res, next)=>{
    if(today==='Saturday' || today==='Sunday'){
        res.render('closed')
    } else {
        if(date.getHours()< 9 || date.getHours() > 17){
            res.render('closed')
        }else {
            next()
        }
    }
})

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/services',(req,res)=>{
    res.render('services')
})