import * as express from 'express';

const app = express();

app.get('/', (req, res,) => {
    res.json({ hello: 'world' });
});

export const server = (async () => {
    app.listen(3000);
    console.log(`Server started at http://localhost:${process.env.PORT}`);
    console.log(`Press Ctrl+C to quit`)
});