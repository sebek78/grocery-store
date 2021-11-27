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
    async create(userId: number, gameId: number) {
        const distributionCenter = new DistributionCenterFactory(
            userId,
            gameId,
        );

        const newCenter =
            this.distributionCenterRepository.create(distributionCenter);
        await this.distributionCenterRepository.save(newCenter);
        return newCenter;
    }

    /*findAll() {
        return `This action returns all distributionCenter`;
    }

    findOne(id: number) {
        return `This action returns a #${id} distributionCenter`;
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
