const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/moises/desafiomarcus0');


function ApagarTabela(nomeTabela){
 const deleteQuery = `DELETE FROM CANTOR_BANDA WHERE CODIGO`;
    db.run(deleteQuery, [], (err) => {
      if (err) {
        console.error(err.message);
        return;
      }
    })

}

console.log(ApagarTabela())

function selecionar(){
  db.serialize(() => {
    db.each("SELECT * FROM CANTOR_BANDA", (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });
  });

}

selecionar()


 


db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
  });

