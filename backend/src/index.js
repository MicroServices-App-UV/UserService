// Archivo principal (index.js)

const port = process.env.PORT || 4000;
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes.js');
const app = express();
const cors = require('cors');
const session =  require('express-session')

app.use(cors({
  origin: ['http://localhost:3000/graphql', 'http://localhost:3002','http://20.83.137.142'],
  credentials: true,
}));


app.use(
  session({ secret: 'keyboard cat', resave: false, saveUninitialized: true })
);

app.get("/", (req, res) => {res.send("Server is running on")})
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    });
});

let server; // Variable para almacenar el servidor

if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    console.log('Server estoy en port 4000');
  });
}

module.exports = server ? server : app;
