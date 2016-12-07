/* author: Bowen */
var express = require('express');
var requestify = require('requestify');
var router = express.Router();
var orders = require('../controllers/order_process');
var genomic_api_call = require('../controllers/call_genomic_api.js');
var hapi_api_call = require('../controllers/call_HAPI_api.js');
var clinical_api = require('../controllers/clinical_api.js');
var test_data = require('../controllers/test_data.js');
var request = require('request');

router.post('/create_report', function(req, res, next){
  var report_data = req.body.report;
  //var api_url = req.session['iss'];
  hapi_api_call.create('DiagnosticReport', report_data, res);
});

router.get('/all_report', function(req, res, next){
  console.log('get all report');
  hapi_api_call.getAll('DiagnosticReport', res);
});

router.get('/all', function(req, res, next){
  var type = req.param('type');
  genomic_api_call.getAll(type, res);
});

router.get('/all_order', function(req, res, next){
  console.log('get all order');
  genomic_api_call.getAll('DiagnosticRequest' ,res);
});

router.post('/update_report', function(req, res, next){
  var report_data = req.body.report;
  var api_url = req.session.iss;
  var id = req.body.id;
  genomic_api_call.update('DiagnosticReport', id, report_data, res)
});
module.exports = router;
