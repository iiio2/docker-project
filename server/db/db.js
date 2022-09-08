const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(`mongodb+srv://admin:admin@cluster0.lnh1kwf.mongodb.net/?retryWrites=true&w=majority`,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=> console.log(`mongodb connected...`))
      .catch((err)=> console.log(err)) 
}

