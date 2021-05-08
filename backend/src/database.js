const mongoose = require('mongoose');

// const uri = 'mongodb://localhost:27017/todos-mern'
// process.env.MONGODB_URI;

const db = mongoose.connection

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

db.once('open', _ => {
    console.log('DB is connected')
});

db.on('error', err => {
    console.log(err)
});