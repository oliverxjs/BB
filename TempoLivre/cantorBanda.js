const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/home/moises/desafiomarcus20');

function ApagarTabela(nomeTabela, nomeColuna, valor){
 const deleteQuery = `DELETE FROM ${nomeTabela} WHERE ${nomeColuna} = ?`;
 db.serialize(() => {
  db.run(deleteQuery, [valor], (err) => {
    if (err) {
      console.error('ixi paizao deu erro', err);
    } else {
      console.log('deu bom')
    }
  })

})}

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

function inserirDados(nomeTabela, valorColuna1, valorColuna2) {
  const insert = `INSERT INTO ${nomeTabela} (nome, tipo) VALUES (?, ?)`;
  db.run(insert, [valorColuna1, valorColuna2], function (err) {
    if (err) {
      console.error('deu ruim meu mano:', err);
    } else {
      console.log('seus dados foram inserido no codigo:', this.lastID);
    }
  });
}
  const nome = 'kyan';
  const tipo = '1';

  function atualizarDados(nomeTabela, id, valorColuna1, valorColuna2) {
    const atualizar = `UPDATE ${nomeTabela} SET nome = ?, tipo = ? WHERE codigo = ?`;
    db.run(atualizar, [valorColuna1, valorColuna2, id], function (err) {
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
    

atualizarDados('CANTOR_BANDA', codigo, atualizanome, atualizatipo);
inserirDados('CANTOR_BANDA', nome, tipo)
selecionar()








db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
  });