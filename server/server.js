const express = require("express");
const app = express();
const db = require('./config/db.js');
const session = require("express-session");
const cors = require('cors');
const User = require("./models/User.js");

const user = require('./routes/user')
const transaction = require('./routes/transaction')
const {
    PORT = 3001, //process.env.PORT || 4500,
    NODE_ENV = 'development',
    SESS_SECRET = 'this is event muslim app secret key',
    SESS_NAME = 'sid',
    SESS_LIFETIME = 1000*60*60*24
} = process.env;

db.authenticate().then(() => console.log("successfully connected to database"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}));
app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie:{
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: true
    }
}));
app.use(user)
app.use(transaction)
app.use(async (req, res, next)=>{
    const {userId} = req.session;
    if(userId){
        res.locals.user = await User.findOne({
            where: {id:userId}
        })
    }
    next();
});

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
