"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const s3_1 = require("./services/s3");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// app.use(express.static('public'));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get('/s3', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield (0, s3_1.generateUploadUrl)();
    console.log(url);
    res.json({ url });
}));
app.get('/', (req, res, next) => {
    res.send('main');
});
app.get('/test', (req, res) => {
    res.send('test');
});
app.get('/runner', (req, res) => {
    res.send('runner');
});
console.log(process.env.NODE_ENV);
app.listen(3000, () => {
    console.log('server start 3000');
});
