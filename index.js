var express = require("express");
const app = express();

const port = 7000;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

const workingTimeMiddleware = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if (day >= 1 && day <=5 && hour >= 8 && hour < 17) {
        next();
    }
    else (res.send('The platform is closed!')); 
}

app.use(workingTimeMiddleware)

app.get('/homepage', (req, res) => {
    res.render('home-page')
});

app.get('/our-services', (req, res) => {
    res.render('our-services')
});

app.get('/contact-us', (req, res) => {
    res.render('contact-us')
});

app.listen(7000, () => {
    console.log('Server is running at https:/localhost:/7000')
});
