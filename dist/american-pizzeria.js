"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmericanPizzeria = void 0;
const pizzeria_1 = __importDefault(require("./pizzeria"));
class AmericanPizzeria extends pizzeria_1.default {
    bake() {
        return 'Pizza is baking in the oven';
    }
}
exports.AmericanPizzeria = AmericanPizzeria;
;
