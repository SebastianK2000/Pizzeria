"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolishPizzeria = void 0;
class PolishPizzeria extends pizzeria {
    constructor(name, openAtNight) {
        super(name);
        this.openAtNight = openAtNight;
    }
    bake() {
        return 'Baking in the oven';
    }
}
exports.PolishPizzeria = PolishPizzeria;
;
