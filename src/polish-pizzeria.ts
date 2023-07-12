import { Pizzeria } from './pizzeria';

export class PolishPizzeria extends Pizzeria {
    constructor(name: string, public openAtNight: boolean) {
        super(name);
    }
    bake() {
        return 'Baking in the oven';
    }
};