/* author: Bowen */
var requestify = require('requestify');
var configs = require('./configs.js')

var doGet = function(url, res){
  requestify.get(url, {
  headers :{'Accept': 'application/json'}
  }).then(function(response){
    res.send(response.getBody());
  });
}

var doPost = function(url, data, res){

  requestify.post(url, data, {
    headers:{
      'Accept' : 'application/json'
    }
    }).then(function(response){
    res.send(response.getBody());
    });
}

var doPut = function(url, data, res){
  requestify.put(url, data,{
    headers:{
    'Accept': 'application/json'
  }
  }).then(function(response){
  res.send(response.getBody());
  });
}

var create = function(data_type, data, res){
  var url = configs.HAPI_url + '/' + data_type +'?_format=json';
  doPost(url, data, res);
}

var update = function(data_type, id, data, res){
  var url = configs.HAPI_url + '/' +data_type + '/' + id +'?_format=json';
  doPut(url, data, res);
}

var getAll = function(data_type, res){
  var url = configs.HAPI_url + '/' + data_type + '?_format=json&_summary=data&_count=20';
  console.log(url);
  doGet(url, res);
}


module.exports = {
  create:create,
  update:update,
  getAll:getAll
}
