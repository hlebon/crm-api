import express from 'express';
import routes from './src/routes/crmRoutes'


const app = express();
const PORT = 3000;

routes(app);

app.get("/", (req, res) => {
    res.send(`My firts request`)
});

app.listen(PORT, () => {
    console.log(`Magic is here in port ${PORT}`)
})