"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizzeria {
    constructor(name) {
        this.pizzasInOrder = [];
        this.maxPizzasInOven = 10;
        this.recipes = [];
        this._manager = 'John Doe';
        this.id = Pizzeria.id++;
        this.name = name;
    }
    get manager() {
        return this._manager;
    }
    set manager(manager) {
        this._manager = manager;
    }
    order(pizza) {
        this.pizzasInOrder.push(pizza);
    }
    isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }
}
Pizzeria.id = 0;
exports.default = Pizzeria;
// class PolishPizzeria extends Pizzeria {
//     bake() {
//         return 'Baking in the oven';
//     }
// };
// // laStrada.order('Margherita');
// // laStrada.manager;
// // laStrada.manager = 'Jane Doe';
// class American extends Pizzeria {
//     bake() {
//         return 'Pizza is baking in the oven';
//     }
// };
// const laStrada = new PolishPizzeria('La Strada');
// const americanHouse = new American('American House');
// const venezia = new PolishPizzeria('Venezia');
// venezia.order('Margherita');
