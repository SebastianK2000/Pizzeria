export default abstract class Pizzeria {
    static id = 0;
    id;
    name;
    private pizzasInOrder = [];
    private maxPizzasInOven = 10;
    protected recipes = [];
    private _manager = 'John Doe';

    constructor(name) {
        this.id = Pizzeria.id++;
        this.name = name;
    }

    get manager() {
        return this._manager;
    }

    set manager(manager) {
        this._manager = manager;
    }
    
    order(pizza: string) {
        this.pizzasInOrder.push(pizza);
    }

    private isOvenFull() {
        return this.pizzasInOrder.length > this.maxPizzasInOven;
    }

    abstract bake();

}

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