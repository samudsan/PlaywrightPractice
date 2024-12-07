"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDataManager = void 0;
const fs_1 = __importDefault(require("fs"));
class TestDataManager {
    static readJSON(filePath) {
        const rawData = fs_1.default.readFileSync(filePath, 'utf-8');
        return JSON.parse(rawData);
    }
}
exports.TestDataManager = TestDataManager;
