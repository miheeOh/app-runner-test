"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/test', (req, res) => {
    res.send('test');
});
app.get('/runner', (req, res) => {
    res.send('runner');
});
app.listen(3000, () => {
    console.log('server start 3000');
});
//# sourceMappingURL=index.js.map