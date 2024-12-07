"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIHelper = void 0;
const axios_1 = __importDefault(require("axios"));
class APIHelper {
    static async get(url) {
        return axios_1.default.get(url);
    }
    static async post(url, data) {
        return axios_1.default.post(url, data);
    }
}
exports.APIHelper = APIHelper;
