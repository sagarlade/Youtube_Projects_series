const { Pool } = require('pg')

const pool = new Pool({
    user:"postgres",
    password:'root@123',
    host:"localhost",
    port:5432,
    database:'login_yt'
});

module.exports=pool;