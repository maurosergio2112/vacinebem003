import express, { Router, Request, Response } from 'express';
import pool from '../db';

const router: Router = express.Router();

// Rota para armazenar as respostas do formulário
router.post('/responder', async (req: Request, res: Response) => {
  const { resposta, vacinaId, usuarioId } = req.body;

  try {
    // Armazenar resposta na tabela questionario
    await pool.query('INSERT INTO questionario (resposta, vacina_id, usuario_id) VALUES ($1, $2, $3)', [resposta, vacinaId, usuarioId]);
    
    res.status(200).json({ message: 'Resposta registrada com sucesso!' });
  } catch (error) {
    console.error('Erro ao armazenar resposta:', error);
    res.status(500).json({ message: 'Erro ao armazenar resposta' });
  }
});

export default router;
