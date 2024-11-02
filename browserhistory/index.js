const sqlite3=require('sqlite3').verbose();

const dbpath = `C:/Users/salih/AppData/Local/Google/Chrome/User Data/Profile 1/History`;

const db=new sqlite3.Database(dbpath,sqlite3.OPEN_READONLY,(err)=>{
    if (err) {
        console.log(err)
    }
     console.log(`connected to chrmoe history`)
})
db.all('SELECT * FROM urls',[],(err,rows)=>{
    if (err) {
        console.log(`error`)
    }
    rows.forEach(item=>{
        console.log(`${item.url}`);
    })
})
