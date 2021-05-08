require('./database');
const User = require('./models/User');

async function newUser() {

    const us1 = new User({
        username: 'tinchoo',
    })
    
    const UserSaved = await us1.save();
    console.log(UserSaved)

    const us2 = new User({
        username: 'pepe',
    })
    
    const UserSavedd = await us2.save();
    console.log(UserSavedd)


}
newUser()
    .then(UserSaved => console.log(UserSaved))
    .catch(err => console.log(err))

// node src/newUser.js