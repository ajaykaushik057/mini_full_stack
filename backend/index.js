import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send('server is ready');
});

// List of 5 jokes

app.get("/api/jokes",(req,res)=>{
    const jokes =[
        {
            "id": 1,
            "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 3,
            "joke": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            "id": 4,
            "joke": "What do you get when you cross a snowman and a vampire? Frostbite."
        },
        {
            "id": 5,
            "joke": "Why was the math book sad? Because it had too many problems."
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});