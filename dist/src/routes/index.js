"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var otherRoute_1 = __importDefault(require("./otherRoute"));
var profile_1 = __importDefault(require("./profile"));
// import { usuario } from '../models/users/user.repository';
var passport_1 = __importDefault(require("passport"));
var user_1 = require("../controller/user");
var products_1 = __importDefault(require("./products"));
var cors_1 = __importDefault(require("cors"));
var cart_1 = __importDefault(require("./cart"));
var auth_1 = __importDefault(require("./auth"));
var viewController_1 = require("../controller/viewController");
var mainRoute = (0, express_1.Router)();
passport_1.default.use('login', user_1.loginFunc);
passport_1.default.use('signup', user_1.signUpFunc);
mainRoute.use("/other", otherRoute_1.default);
mainRoute.use("/profile", profile_1.default);
mainRoute.use("/products", products_1.default);
mainRoute.use("/cart", cart_1.default);
mainRoute.use("/auth", auth_1.default);
mainRoute.use((0, cors_1.default)());
mainRoute.get('/', viewController_1.homeview);
exports.default = mainRoute;
