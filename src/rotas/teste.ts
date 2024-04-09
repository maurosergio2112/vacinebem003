import express, { Router, Request, Response } from 'express';
import pool from '../db';

const router: Router = express.Router();

// Rota de teste para verificar a conexão com o banco de dados
router.get('/teste', async (req: Request, res: Response) => {
  try {
    // Executar uma consulta de teste no banco de dados
    const result = await pool.query('SELECT NOW()');

    // Se a consulta for bem-sucedida, enviar uma mensagem indicando que a conexão está funcionando
    res.status(200).json({ message: 'Conexão com o banco de dados PostgreSQL estabelecida com sucesso!' });
  } catch (error) {
    console.error('Erro ao testar conexão com o banco de dados:', error);
    res.status(500).json({ message: 'Erro ao testar conexão com o banco de dados' });
  }
});

export default router;
