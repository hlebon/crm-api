import express from 'express';


const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`My firts request`)
});

app.listen(PORT, () => {
    console.log(`Magic is here in port ${PORT}`)
})