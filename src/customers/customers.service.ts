import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersFactory } from './content/customers';
import { Customers } from './entities/customers.entity';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(Customers)
        private customersRepository: Repository<Customers>,
    ) {}

    async create(gameId: number) {
        const customersData = new CustomersFactory();
        const newCustomers = this.customersRepository.create({
            game_id: gameId,
            customers_data: customersData.customers_data,
        });
        await this.customersRepository.save(newCustomers);
        return {
            customersId: newCustomers.customers_id,
            gameId: newCustomers.game_id,
            costs: newCustomers.customers_data,
        };
    }
    /*
    findAll() {
        return `This action returns all customers`;
    }

    findOne(id: number) {
        return `This action returns a #${id} customer`;
    }

    update(id: number, updateCustomerDto: UpdateCustomerDto) {
        return `This action updates a #${id} customer`;
    }

    remove(id: number) {
        return `This action removes a #${id} customer`;
    }*/
}
