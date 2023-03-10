"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.productoSchema = new mongoose_1.default.Schema({
    title: { type: String, require: true, max: 100 },
    price: { type: Number, require: true },
    thumbnail: { type: String, require: true, max: 100 },
    stock: { type: Number, require: true },
    category: { type: String, require: false }
}, { timestamps: true });
