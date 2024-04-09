const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vacinebem003',
  password: 'admin',
  port: 5432,
});


// Testar a conexão com o banco de dados
pool.connect((err, client, release) => {
  if (err) {
      return console.error('Erro ao conectar ao banco de dados:', err);
  }
  console.log('Conexão ao banco de dados estabelecida com sucesso!');
     
  async function select(){
      const resultado = await client.query('select * from entes_anteriores;'); //teste de select
      console.log('Resultado do SELECT:', resultado.rows);
  }
  release();


  select();
});

module.exports = pool;
