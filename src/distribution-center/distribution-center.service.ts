import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DistributionCenter } from './entities/distribution-center.entity';
import { DistributionCenterFactory } from './content/distribution-center-factory';
// import { CreateDistributionCenterDto } from './dto/create-distribution-center.dto';
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
            costs: newCenter.costs,
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
            costs: center.costs,
        };
    }

    /*findAll() {
        return `This action returns all distributionCenter`;
    }

    update(
        id: number,
        updateDistributionCenterDto: UpdateDistributionCenterDto,
    ) {
        return `This action updates a #${id} distributionCenter`;
    }

    remove(id: number) {
        return `This action removes a #${id} distributionCenter`;
    }*/
}
