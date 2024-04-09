import express, { Router, Request, Response } from 'express';
import pool from '../db';

const router: Router = express.Router();

// Rota para cadastrar um novo usuário
router.post('/cadastrar', async (req: Request, res: Response) => {
    const { nome, cpf, email, dataDeNascimento, profissao } = req.body;
    try {
        // Inserir usuário na tabela usuario
        await pool.query('INSERT INTO usuario (nome, cpf, email, data_de_nascimento, profissao) VALUES ($1, $2, $3, $4, $5)', [nome, cpf, email, dataDeNascimento, profissao]);
        res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }
});

export default router;
