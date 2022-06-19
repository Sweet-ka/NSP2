const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const todoRoutes = require('./routes/todos');
const { content_blog } = require('./content');
const mysql  = require ( 'mysql2' );
const config = require('./config/default.json');
const { json } = require('body-parser');


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(todoRoutes);
app.use(express.static("public"))

app.get("/", function( req, res ) {
    res.render('home.ejs', {content_blog: content_blog});
});

app.listen(3000, function() {
    console.log('work port 3000');
})

const connection_start = () => {
    return mysql.createConnection({
        host: config.database.host,
        user: config.database.user,
        database: config.database.database,
        password: config.database.password,
        port: config.port
})
};

// connection.connect(function(err){
//     if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });
// connection.end()

const sql = `SELECT * FROM users`;
const sqladd = (obj) => {
    return `INSERT INTO users (login, email, password, avatar) VALUES ('${obj.login}', '${obj.email}', '${obj.password}', '${obj.avatar}')`;
 }
 
// connection.query(sql, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });

//connection.end();

app.post('/', async (req, res) => {
    const pool = connection_start()
    connection_start()

    const treat = new Promise((resolve, rejekt) => {
        if(req.body){
            let sqlAdd = sqladd(req.body);
            pool.query(sqlAdd, function(err, results) {
                if(err) {
                    rejekt(console.log(err));
                } else {
                    resolve(results);
                }
            })
        }
    })
        await treat;
        res.send();
        pool.end(()=>{
            console.log('подключение остановлено')
        });
});

app.post('/goods', async(req, res) => {
    const pool = connection_start();
    connection_start()

    const treat = new Promise((resolve, rejekt) => {
        pool.query('SELECT * FROM `goods` WHERE 1', function (err, results) {
            if(err) {
                rejekt(console.log(err));
            } else {
                resolve(results);
            }
        })
    })  
    res.send(await treat);
    pool.end(()=>{
        console.log('подключение остановлено')
    });
})
