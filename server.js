const express = require('express')
const path = require('path')
const app = express()
const port = 4500


app.get('/folder/:fileName', (req, res) => {
    const requestedFileName = req.params.fileName;

    const filePath = path.join(__dirname, 'folder', requestedFileName);
   
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});

//   input command in terminal curl http://localhost:4500/folder/{index,about,support}.html
