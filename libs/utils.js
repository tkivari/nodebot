module.exports = {
  setDefaultResponseHeaders: function(response) {
    response.header("Access-Control-Allow-Origin", "*"); 
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    console.log("setDefaultResponseHeaders");
  }
};