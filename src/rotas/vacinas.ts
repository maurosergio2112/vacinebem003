import express, { Router, Request, Response } from 'express';
import pool from '../db';

const router: Router = express.Router();

// Rota para cadastrar uma nova vacina
router.post('/cadastrar', async (req: Request, res: Response) => {
  const { nomeVacina } = req.body;

  try {
    // Inserir vacina na tabela vacinas
    await pool.query('INSERT INTO vacinas (nome_vacina) VALUES ($1)', [nomeVacina]);
    
    res.status(200).json({ message: 'Vacina cadastrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar vacina:', error);
    res.status(500).json({ message: 'Erro ao cadastrar vacina' });
  }
});

export default router;
