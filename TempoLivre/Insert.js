const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/moises/desafiomarcus0');

const insertQuery = `INSERT INTO CANTOR_BANDA (nome, tipo) VALUES ('xpto', '1')`;
db.run(insertQuery, function (err) { 
  if (err) {
    console.error(err.message);
    return;
  }
});

db.serialize(() => {
    db.each("SELECT * FROM CANTOR_BANDA", (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });
  });
   
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
  });