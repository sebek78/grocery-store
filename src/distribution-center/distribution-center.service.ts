import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DistributionCenter } from './entities/distribution-center.entity';
import { DistributionCenterFactory } from './content/distribution-center-factory';
import { Repository } from 'typeorm';
// import { UpdateDistributionCenterDto } from './dto/update-distribution-center.dto';

@Injectable()
export class DistributionCenterService {
    constructor(
        @InjectRepository(DistributionCenter)
        private distributionCenterRepository: Repository<DistributionCenter>,
    ) {}
    async create(gameId: number) {
        const distributionCenter = new DistributionCenterFactory(gameId);
        const newCenter =
            this.distributionCenterRepository.create(distributionCenter);
        await this.distributionCenterRepository.save(newCenter);

        return {
            centerId: newCenter.center_id,
            gameId: newCenter.game_id,
            costs: newCenter.costs[0],
        };
    }

    async findOne(gameId: number) {
        const center = await this.distributionCenterRepository.findOne({
            loadRelationIds: true,
            where: {
                game_id: gameId,
            },
        });
        if (!center) return null;

        return {
            centerId: center.center_id,
            gameId: center.game_id,
            // TODO: costs parsing
            costs: center.costs[0],
        };
    }

    async getCenterIdByGameId(game_id: number) {
        const centerRaw = await this.distributionCenterRepository.findOne({
            where: [{ game_id }],
        });
        return centerRaw?.center_id;
    }

    /*findAll() {
        return `This action returns all distributionCenter`;
    }

    update(
        id: number,
        updateDistributionCenterDto: UpdateDistributionCenterDto,
    ) {
        return `This action updates a #${id} distributionCenter`;
    }*/

    async delete(centerId: number) {
        await this.distributionCenterRepository.delete(centerId);
    }
}
