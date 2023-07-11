import { PolishPizzeria } from './polish-pizzeria';

export class PolishPizzeria extends pizzeria {
    constructor(name, public openAtNight) {
        super(name);
    }
    bake() {
        return 'Baking in the oven';
    }
};