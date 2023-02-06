"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var otherRoute_1 = __importDefault(require("./otherRoutes/otherRoute"));
var profile_1 = __importDefault(require("./profileAndChat/profile"));
var viewController_1 = require("../Controllers/viewController");
var LoggedVerification_1 = require("../middlewares/LoggedVerification");
var passport_1 = __importDefault(require("passport"));
var auth_1 = require("../services/auth");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_2 = __importDefault(require("express"));
var express_session_1 = __importDefault(require("express-session"));
var storeOptions_1 = require("../api/storeOptions");
var products_1 = __importDefault(require("./cartAndProd/products"));
var cors_1 = __importDefault(require("cors"));
var cart_1 = __importDefault(require("./cartAndProd/cart"));
var logIn_1 = __importDefault(require("./logIn-register-logOut/logIn"));
var register_1 = __importDefault(require("./logIn-register-logOut/register"));
var logOut_1 = __importDefault(require("./logIn-register-logOut/logOut"));
var mainRoute = (0, express_1.Router)();
mainRoute.use(express_2.default.json());
mainRoute.use(express_2.default.urlencoded({ extended: true }));
mainRoute.use(express_2.default.static('public'));
mainRoute.use((0, cookie_parser_1.default)());
mainRoute.use((0, express_session_1.default)(storeOptions_1.storeOptions));
mainRoute.use(passport_1.default.initialize());
mainRoute.use(passport_1.default.session());
passport_1.default.use('login', auth_1.loginFunc);
passport_1.default.use('signup', auth_1.signUpFunc);
mainRoute.use("/other", otherRoute_1.default);
mainRoute.use("/profile", profile_1.default);
mainRoute.use("/products", products_1.default);
mainRoute.use("/cart", cart_1.default);
mainRoute.use("/login", logIn_1.default);
mainRoute.use("/register", register_1.default);
mainRoute.use("/logout", logOut_1.default);
mainRoute.use((0, cors_1.default)());
mainRoute.get('/', LoggedVerification_1.isLogged, LoggedVerification_1.loggedIsNotDestroyed, viewController_1.homeview);
exports.default = mainRoute;