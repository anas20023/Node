import express from "express"
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => { 
    // return the runtime of the server in h:m:s format
    const serverStartTime = app.locals.serverStartTime || new Date();
    app.locals.serverStartTime = serverStartTime;

    const currentTime = new Date();
    const timeDiff = currentTime.getTime() - serverStartTime.getTime();
    const hours = Math.floor(timeDiff / 3600000);
    const minutes = Math.floor((timeDiff % 3600000) / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    res.json({ "time": `${hours}:${minutes}:${seconds}` });
 })
app.listen(port, () => { console.log(`server running on port ${port}`) })