const express = require('express');

const app = express();
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
});

app.get('/add/:val1/:val2', (req, res) => {
  const { val1, val2 } = req.params;
  res.send(`    
    <html>
        <head>
            <meta charset="utf-8">
            <title>Adição</title>
        </head>
        <body>
            <h1 id="result"></h1>
        </body>
    </html>
    <script>                  
      const val1 = ${val1}
      const val2 = ${val2}
      
      let element = document.getElementById("result");
      element.innerHTML = "Resultado = "+ parseInt(val1+val2);
    </script>
  `);
});

app.get('/sub/:val1/:val2', (req, res) => { 
  const { val1, val2 } = req.params;   
  res.send(`    
    <html>
        <head>
            <meta charset="utf-8">
            <title>Subtação</title>
        </head>
        <body>
            <h1 id="result"></h1>
        </body>
    </html>
    <script>
      const val1 = ${val1}
      const val2 = ${val2}
      
      let element = document.getElementById("result");
      element.innerHTML = "Resultado = "+ parseInt(val1-val2);
    </script>
  `);
});

app.get('/mul/:val1/:val2', (req, res) => {
  const { val1, val2 } = req.params;    
  res.send(`    
    <html>
        <head>
            <meta charset="utf-8">
            <title>Multiplicação</title>
        </head>
        <body>
            <h1 id="result"></h1>
        </body>
    </html>
    <script>
      const val1 = ${val1}
      const val2 = ${val2}
      
      let element = document.getElementById("result");
      element.innerHTML = "Resultado = "+ parseFloat(val1*val2);
    </script>
  `);
});

app.get('/div/:val1/:val2', (req, res) => {
  const { val1, val2 } = req.params;    
  res.send(`    
    <html>
        <head>
            <meta charset="utf-8">
            <title>Divisão</title>
        </head>
        <body>
            <h1 id="result"></h1>
        </body>
    </html>
    <script>
      const val1 = ${val1}
      const val2 = ${val2}
      
      let element = document.getElementById("result");
      element.innerHTML = val2 !== 0 ? "Resultado = "+ parseFloat(val1/val2) : "Não é possível dividir por zero";
    </script>
  `);
});