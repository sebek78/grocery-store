import { Injectable } from '@nestjs/common';
import { Store } from './content/store';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stores } from './entities/store.entity';
import { Prices } from './content/prices';
// import { CreateStoreDto } from './dto/create-store.dto';
// import { UpdateStoreDto } from './dto/update-store.dto';

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

        const { prices } = new Prices();
        return {
            storeId: newStore.store_id,
            gameId: newStore.game_id,
            store: JSON.parse(newStore.store),
            stockRoom: JSON.parse(newStore.stock_room),
            prices,
        };
    }

    async findOne(gameId: number) {
        const storeRaw = await this.storesRepository.findOne({
            loadRelationIds: true,
            where: {
                game_id: gameId,
            },
        });
        if (!storeRaw) return null;

        const { prices } = new Prices();
        return {
            storeId: storeRaw.store_id,
            gameId: storeRaw.game_id,
            store: JSON.parse(storeRaw.store),
            stockRoom: JSON.parse(storeRaw.stock_room),
            prices,
        };
    }

    async getStoreIdByGameId(game_id: number) {
        const storeRaw = await this.storesRepository.findOne({
            where: [{ game_id }],
        });
        return storeRaw?.store_id;
    }

    /*
    findAll() {
        return `This action returns all stores`;
    }

    update(id: number, updateStoreDto: UpdateStoreDto) {
        return `This action updates a #${id} store`;
    }*/

    async delete(storeId: number) {
        await this.storesRepository.delete(storeId);
    }
}
