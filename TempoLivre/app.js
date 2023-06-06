const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/moises/desafiomarcus0');

// Insere um novo registro de cantor ou banda
const insertQuery = `INSERT INTO CANTOR_BANDA (nome, tipo) VALUES ('xpto', '1')`;
db.run(insertQuery, function (err) { 
  if (err) {
    console.error(err.message);
    return;
  }
});

// Atualiza o primeiro registro
const updateQuery = `UPDATE CANTOR_BANDA SET NOME = 'ttt'`
 db.run(updateQuery, function (err) { 
 if (err) {
   console.error(err.message);
  return;
 }
});

const deleteQuery = `DELETE FROM CANTOR_BANDA WHERE CODIGO = 4`;
db.run(deleteQuery, [], (err) => {
  if (err) {
    console.error(err.message);
    return;
  }
})



// Roda o banco de dados
db.serialize(() => {
  db.each("SELECT * FROM CANTOR_BANDA", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
});

// Fecha o banco de dados
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conexão com o banco de dados fechada.');
});