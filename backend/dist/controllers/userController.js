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
exports.signUp = signUp;
exports.Login = Login;
exports.deleteAccount = deleteAccount;
exports.findUser = findUser;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
function createToken(_id) {
    return jsonwebtoken_1.default.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
}
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, userName, displayPicture } = req.body;
        try {
            const user = yield userModel_1.default.signup(email, password, userName, displayPicture);
            const token = createToken(user._id);
            res.status(200).json({ id: user._id, displayPicture, token, email, password, userName });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function Login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, userName } = req.body;
        try {
            console.log(email, password, userName);
            const user = yield userModel_1.default.login(email, password, userName);
            console.log(user);
            const token = createToken(user._id);
            console.log(token);
            res.status(200).json({ id: user._id, displayPicture: user.displayPicture, token, email, password, userName });
        }
        catch (error) {
            console.log(email, password, userName);
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    });
}
function deleteAccount(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield userModel_1.default.findOneAndDelete({ _id: id, });
            res.status(200).json(user);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}
function findUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userName } = req.params;
        try {
            const user = yield userModel_1.default.findOne({ userName });
            if (!user) {
                return res.status(404).json({ error: "User doesn't exist" });
            }
            res.status(200).json(user);
        }
        catch (error) {
        }
    });
}
