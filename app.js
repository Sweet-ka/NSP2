const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const todoRoutes = require('./routes/todos');
const {  } = require('./content');
const mysql  = require ( 'mysql2' );
const config = require('./config/default.json');
const fs = require ('fs');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(todoRoutes);
app.use(express.static("public"))

app.get("/", function( req, res ) {
    res.render('home.ejs');
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

// добавить пользователя в базу
const sqlAddUser = (obj) => {
    return `INSERT INTO users (login, email, password, avatar) VALUES ('${obj.login}', '${obj.email}', '${obj.password}', '${obj.avatar}')`;
}
 
app.post('/', async (req, res) => {
    const pool = connection_start()
    connection_start()

    const treat = new Promise((resolve, rejekt) => {
        if(req.body){
            const sql = sqlAddUser(req.body);
            pool.query(sql, function(err, results) {
                if(err) {
                    rejekt(console.log(err));
                } else {
                    resolve(results);
                }
            })
        }
    })
    await treat;
    res.send('Пользователь добавлен');
    pool.end(()=>{
        console.log('подключение остановлено')
    });
});

// получить перечень товаров
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

// записать все товары в json файл
app.post('/writejson', async(req, res) => {
    const jsn = JSON.stringify(Object.assign({}, req.body));
    console.log(req.headers.file)
        fs.writeFile (`public${req.headers.file}`, jsn, (err) => {
            if (err) {
                console.log(err);
            }
            console.log ("Данные JSON сохранены.");
        });
    res.send('ok');
})

// получить 4 отзыва
app.post('/reviews', async(req, res) => {
    const pool = connection_start();
    connection_start()

    const treat = new Promise((resolve, rejekt) => {
        pool.query('SELECT * FROM `reviews` WHERE 1', function (err, results) {
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
});

app.get('/goods', async(req, res) => {
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
