import { shuffle } from '@shared/functions';

/* [produce, bakery, dairy, dry goods, frozen], buying costs, ProductType */
const costs = [
    '2,3,1,3,3',
    '1,3,2,5,3',
    '3,1,2,5,3',
    '1,2,3,3,4',
    '1,2,3,4,5',
    '1,2,2,6,4',
];

export class DistributionCenterFactory {
    costs: string[];

    constructor(public game_id: number) {
        this.costs = shuffle(costs);
    }
}
