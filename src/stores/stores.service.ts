import { Injectable } from '@nestjs/common';
import { Store } from './content/store';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stores } from './entities/store.entity';
// import { CreateStoreDto } from './dto/create-store.dto';
// import { UpdateStoreDto } from './dto/update-store.dto';
import { keysToCamelCase } from '@shared/functions';

@Injectable()
export class StoresService {
    constructor(
        @InjectRepository(Stores)
        private storesRepository: Repository<Stores>,
    ) {}
    async create(game_id: number) {
        const store = new Store(game_id);
        const newStore = this.storesRepository.create(store);
        await this.storesRepository.save(newStore);
        return keysToCamelCase(newStore);
    }
    /*
    findAll() {
        return `This action returns all stores`;
    }

    findOne(id: number) {
        return `This action returns a #${id} store`;
    }

    update(id: number, updateStoreDto: UpdateStoreDto) {
        return `This action updates a #${id} store`;
    }

    remove(id: number) {
        return `This action removes a #${id} store`;
    }*/
}
