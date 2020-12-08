// const debug = require('debug')('server')
const morgan = require('morgan')
const express = require("express");
const bodyParser = require("body-parser");
// const listEndpoints = require("express-list-endpoints");
const cookieParser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const dotenv = require('dotenv')
const cors = require('cors')

// const multer = require('multer')

// VISTAS *********************************************
const path = require('path')
const engine = require('ejs-mate')
// *****************************************************

const { errorHandler } = require('./components/middlewares')

// Initialize Server
const app = express()

// CONFIG
dotenv.config()

// VISTAS  ********************************************* 
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine)
app.set('view engine', 'ejs')
// *****************************************************

// MIDDLEWARES
app.use(errorHandler)
// Ver peticiones
app.use(morgan('dev'))
// Recive datos del cliente
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// SESSION *********************************************
const { database } = require('./db/config/keys')
//  Populate req.cookies
app.use(cookieParser())
// Session
app.use(session({
  key: 'cookie_dg',
  secret: 'session_cookie_secret_dg',
  cookie: {
    // maxAge: 6000000,
    maxAge: 600000000,
    // Here’s the catch: it only works with HTTPS
    secure: false
  },
  resave: false,
  saveUninitialized: false,
  unset: 'destroy',
  store: new MySQLStore(database)
}))

// CORS
app.use(cors({
  origin: [
    'http://localhost:8086/',
    'https://localhost:8086/'
  ],
  credentials: true,
  exposedHeaders: ['cookie']
}));

// PASSPORT
require('./lib/passport')

app.use(passport.initialize())
app.use(passport.session())


// ROUTES
app.use('/api/associations', require('./api/associations/association.api'))
app.use('/api/categories', require('./api/categories/categories.api'))
app.use('/api/assocat', require('./api/assocat/assocat.api'))
app.use('/api/roles', require('./api/roles/roles.api'))
app.use('/api/threads', require('./api/threads/threads.api'))
app.use('/api/posts', require('./api/posts/posts.api'))
app.use('/api/chats', require('./api/chats/chats.api'))
app.use('/api/messages', require('./api/messages/messages.api'))
app.use('/api/users', require('./api/users/users.api'))
// LOGUEO
app.use(require('./routes/auth.routes'))
// FILES
app.use('/api/loadFile', require('./routes/loadFile.routes'))

// List Routes
// console.info(listEndpoints(app));

app.set('port',process.env.PORT || 8080)
app.listen(app.get('port'), () => {
  console.log('*****************************')
  console.info(`*  App start on port ${app.get('port')}. *`)
  console.log('*****************************')
})

// await db.sequelize.sync({ force: false })
//   .then(() => {
//     console.log('BD Conected.')
//   })
//   .catch(err => {
//     console.log(err)
//   })

// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

// global.appRoot = path.resolve(__dirname);
// require("console-stamp")(console, { pattern: "dd/mm/yyyy HH:MM:ss.l" });

// const debug = require("debug")("hefamemodifstockminmaxwsservice:server");



// const db = require("./models");

// const hefameModifStockMinMaxWS = require("./app/api/hefameModifStockMinMaxWSService");

// const env = process.env.NODE_ENV || "development";
// const config = require("./config/config.json")[env];
// const pjson = require("./package.json");

// console.info(`Configuration version ${pjson.version}, ENV [${env}] ${JSON.stringify(config)}`);

// // Initialize  Server
// const app = express();
// app.use(bodyParser.json());
// app.use(express.static("app/public"));

// // Load API
// hefameModifStockMinMaxWS(app);



// //  force: true -> Adds a DROP TABLE IF EXISTS before trying to create the table.
// //  If you force, existing tables will be overwritten.
// db.sequelize.sync(/* {force: false} */).then(() => {
// const used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.info(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// app.listen(8080, () =>
//   console.info('[Hefame Modifica Stock Min/Max WS Service] App start!')
// );
// });
