import React from "react";
import { View, Text } from "react-native";
import Navigation from './src/index';

const App = () => {
  return <Navigation />;
};



const express = require('express');
const usuariosRouter = require('./src/rotas/usuarios');
const vacinasRouter = require('./src/rotas/vacinas');
const questionarioRouter = require('./src/rotas/questionario');
const testeRouter = require('./src/rotas/teste');
const app = express();

app.use(express.json());

// Rotas
app.use('/api/usuarios', usuariosRouter);
app.use('/api/vacinas', vacinasRouter);
app.use('/api/questionario', questionarioRouter);
app.use('/api/teste', testeRouter);
// Outras configurações e rotas...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

module.exports = app;

export default App;