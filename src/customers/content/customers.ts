import { shuffle } from '@shared/functions';
import { ProductType } from '@shared/types';

export const customersData = [
    // name, slots, coupons, completed, penalty, index of Products Type
    'Anna,3,1,0,4,44422011333',
    'Adam,2,1,0,2,00224443311',
    'Basia,1,0,0,4,33332220000',
    'Bartek,3,0,0,5,32220001114',
    'Dawid,5,2,8,12,00011233344',
    'Danuta,3,0,0,5,00444222111',
    'Maciek,1,0,0,5,44442102222',
    'Monika,1,0,0,3,22000011133',
    'Szymon,2,0,0,6,10000222223',
    'Celina,4,0,0,7,22111111144',
    'Grzesiek,4,2,0,7,33322001144',
    'Gośka,2,0,0,3,44400221133',
    'Ewa,5,0,10,15,44433001112',
    'Edward,2,0,0,8,44444444444',
    'Krzysiek,4,1,0,9,20000333144',
    'Krystyna,2,1,0,3,33311024444',
    'Jerzy,4,1,0,8,11111144444',
    'Joanna,3,1,0,6,00024433311',
    'Mikołaj,2,1,0,4,22233144000',
    'Maria,1,0,0,5,44133322200',
    'Filip,4,2,0,10,33000222111',
    'Zofia,5,1,9,13,44411132200',
    'Henryk,3,0,10,6,22111004333',
    'Hanna,4,2,0,9,11000233344',
    'Janek,3,1,0,5,33300122244',
    'Iwona,1,0,0,8,33301122444',
    'Łukasz,3,0,0,8,22201114333',
    'Lucyna,3,1,0,7,33322140000',
    'Mateusz,4,1,0,8,00014433222',
    'Marta,2,1,0,6,11110022444',
];

interface ICustomer {
    name: string;
    completed: number;
    penalty: number;
    needs: (keyof ProductType)[];
}

export class CustomersFactory {
    private tempCustomers: ICustomer[] = [];
    public customers_data: string[] = [];
    constructor() {
        this.createCustomers();
        this.divideCustomers();
    }
    private createCustomers() {
        this.tempCustomers = customersData.map((dataStr: string) => {
            const data = dataStr.split(',');
            const needs: (keyof ProductType)[] = [];
            for (let i = 0; i < Number.parseInt(data[1], 10); i++) {
                const d1 = Math.floor(Math.random() * 6 + 1);
                const d2 = Math.floor(Math.random() * 6 + 1);
                const roll = d1 + d2 - 2;
                const productTypeNumber = Number.parseInt(data[5][roll]);
                const key = Object.keys(ProductType)[productTypeNumber];
                needs.push(key as keyof ProductType);
            }
            return {
                name: data[0],
                completed: Number.parseInt(data[2], 10),
                penalty: Number.parseInt(data[3], 10),
                needs,
            };
        });
        this.tempCustomers = shuffle(this.tempCustomers);
    }

    private divideCustomers() {
        for (let days = 0; days < 6; days++) {
            const customers = this.tempCustomers.slice(5 * days, 5 * days + 5);
            this.customers_data.push(JSON.stringify(customers));
        }
    }
}
