const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/moises/desafiomarcus0');


function del(){

 const deleteQuery = `DELETE FROM CANTOR_BANDA WHERE CODIGO = 1`;
    db.run(deleteQuery, [], (err) => {
      if (err) {
        console.error(err.message);
        return;
      }
    })

}



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

