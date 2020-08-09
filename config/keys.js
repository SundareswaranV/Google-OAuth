if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}


// produser :UxT89M8s3uP1NBsq
// mongodb+srv://produser:UxT89M8s3uP1NBsq@emaily-prod-jekh7.mongodb.net/test?retryWrites=true&w=majority
