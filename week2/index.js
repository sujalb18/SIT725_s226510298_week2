const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

app.post('/subtract', (req, res) => {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    const difference = a - b;
    res.send(`The difference between ${a} and ${b} is: ${difference}`);
});

app.post('/multiply', (req, res) => {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    const product = a * b;
    res.send(`The product of ${a} and ${b} is: ${product}`);
});

app.post('/divide', (req, res) => {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    if (b === 0) {
        res.status(400).send('Error: Division by zero is not allowed.');
    } else {
        const quotient = a / b;
        res.send(`The quotient of ${a} and ${b} is: ${quotient}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});