import { PolishPizzeria } from './polish-pizzeria';
import { AmericanPizzeria } from './american-pizzeria';
import { Status } from './pizza.model';

const laStrada = new PolishPizzeria('La Strada' , true);
const americanHouse = new AmericanPizzeria('American House');
const venezia = new PolishPizzeria('Venezia', false);

const isOvenInVeneziaFull = venezia.isOvenFull(); 

const capriciosa = {
    name: 'Capriciosa',
    price: 25.99,
    size: 'large',
    status: Status.Ordered
}


venezia.order(capriciosa);
venezia.changeStatus(0, Status.Baked);
