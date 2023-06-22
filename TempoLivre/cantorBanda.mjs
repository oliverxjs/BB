const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/moises/desafiomarcus20');

function apagar(codigo){
 const deleteQuery = `DELETE FROM CANTOR_BANDA WHERE codigo = ?`;
 db.serialize(() => {
  db.run(deleteQuery, [codigo], (err) => {
    if (err) {
      console.error('ixi paizao deu erro', err);
    } else {
      console.log('deu bom')
    }
  })

})}

function selecionarTudo(){
  db.serialize(() => {
    db.each("SELECT * FROM CANTOR_BANDA", (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });
  });
}

function inserir(nome, tipo) {
  const insert = `INSERT INTO CANTOR_BANDA (nome, tipo) VALUES (?, ?)`;
  db.run(insert, [nome, tipo], function (err) {
    if (err) {
      console.error('deu ruim meu mano:', err);
    } else {
      console.log('seus dados foram inserido no codigo:', this.lastID);
    }
  });
}
  const nome = 'kyan';
  const tipo = '1';

  function atualizar(codigo, nome, tipo) {
    const atualizar = `UPDATE CANTOR_BANDA SET nome = ?, tipo = ? WHERE codigo = ?`;
    db.run(atualizar, [nome, tipo, codigo], function (err) {
      if (err) {
        console.error('deu ruim meu mano:', err);
      } else {
        console.log('dados atualizados, essas foram as mudancas:', this.changes);
      }
    }
)}
    const codigo = 2;
    const atualizanome = 'Kayblack';
    const atualizatipo = '1';
    


  function fechar(){
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Conexão com o banco de dados fechada.');
    });

  }
