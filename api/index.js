const express = require("express");
const cors = require("cors"); // Permite tráfego entre redes diferentes
const rotas = require("./routes/rotas");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // [00:06:43]

app.use(rotas);

const porta = process.env.PORT || 3000;

app.listen(porta, () => {
  console.log("Servidor da API rodando na porta " + porta);
});
