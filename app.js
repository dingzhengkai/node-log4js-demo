var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });

// 日志
const log4js_1 = require("log4js");
// const log4js_1 = __importDefault(require("log4js"));
log4js_1.configure('./log4js-DAILYFILE.json');
// const default_logger = log4js_1.default.getLogger(); 
const logger = log4js_1.getLogger();

logger.debug('begin to start http server', __filename);

// var express_1 = require('express');
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// const morgan_1 = __importDefault(require("morgan"));
// app.use(morgan_1.default('dev'));

var bodyParser = require('body-parser');
var http = require("http");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (request, response) {
    response.setHeader("content-type", "text/plain;charset=utf-8");
    response.end("This is Home Page!");
    logger.debug("DEBUG访问首页");
    logger.warn("WARN访问首页");
    logger.error("ERROR访问首页");
    logger.info(request.get("Host"));
    logger.info(request.get("HTTP_X_FORWARDED_FOR"));
    logger.info(request.get("X-FORWARDED-FOR"));
    logger.info(request.get("TenantId"));
});

app.get("/about", function (request, response) {
    response.setHeader("content-type", "text/plain;charset=utf-8");
    response.end("About!");
});

app.get("/scancode", function (request, response) {
    response.setHeader("content-type", "text/plain;charset=utf-8");
    response.end("scancode!");
    console.log(request.body);
});

app.post('/scancode', function (req, res) {
    console.log(req.body);
    res.send(req.body);
    console.log(req.get("TenantId"));
});

http.createServer(app).listen(8999);
logger.info("server start up at localhost:8999");
// console.log("log server start up at localhost:8999");