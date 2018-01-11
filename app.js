var express = require('express');
var path = require('path');


var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/download', (req, res) => {
    res.set({
        'Content-Type' : 'application/octet-stream',
        'Content-Disposition' : 'attachment;filename=\"test.txt\"'
    });

    res.download('public/test.txt');
});

app.listen(3000, () => {
    console.log('Serve started');
});