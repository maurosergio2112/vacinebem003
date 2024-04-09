// Em userController.js

const pool = require('./db');

class UserController {
  async getUsers() {
    try {
      const result = await pool.query('SELECT * FROM usuario');
      return result.rows;
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      throw error;
    }
  }

  async insertUser(nome, cpf, email, dataDeNascimento, profissao) {
    try {
      const query = 'INSERT INTO usuario (nome, cpf, email, data_de_nascimento, profissao) VALUES ($1, $2, $3, $4, $5)';
      const values = [nome, cpf, email, dataDeNascimento, profissao];
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      console.error('Erro ao inserir usuário:', error);
      throw error;
    }
  }

  // Outras funções para manipular usuários...
}

module.exports = new UserController();
