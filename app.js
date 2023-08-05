const express=require('express')
const mongoose=require('mongoose')
const app=express()
const path=require('path')
const ejsMate=require('ejs-mate')
const methodOverride = require('method-override');
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));
app.engine('ejs',ejsMate)

const Campground=require('./models/campground')

mongoose.connect('mongodb://127.0.0.1:27017/yelpcamp')
.then(()=>{
    console.log("CONNECTED TO DATABASE")
})
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/campgrounds',async(req,res)=>{
    const campgrounds=await Campground.find({})
    res.render('campgrounds/index',{campgrounds})
})
app.post('/campgrounds',async(req,res)=>{
    const campground=new Campground(req.body)
    await campground.save();
    res.redirect(`/campgrounds/${campground.id}`)
})
app.get('/campgrounds/new',async(req,res)=>{
    res.render('campgrounds/new')
})
app.get('/campgrounds/:id/edit',async(req,res)=>{
    const id=req.params.id
    const campground=await Campground.findById(id)
    res.render('campgrounds/edit',{campground})
})

app.get('/campgrounds/:id',async(req,res)=>{
    const id=req.params.id;
    const campground=await Campground.findById(id)
    res.render('campgrounds/show',{campground})
})
app.put('/campgrounds/:id',async(req,res)=>{
    const id=req.params.id
    const campground=await Campground.findByIdAndUpdate(id,req.body)
    res.redirect(`/campgrounds/${campground.id}`)
})
app.delete('/campgrounds/:id',async(req,res)=>{
    const id=req.params.id;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
})
app.listen(3000,()=>{
    console.log('ON PORT 3000')
})