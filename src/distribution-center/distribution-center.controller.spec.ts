import { Test, TestingModule } from '@nestjs/testing';
import { DistributionCenterController } from './distribution-center.controller';
import { DistributionCenterService } from './distribution-center.service';

describe('DistributionCenterController', () => {
    let controller: DistributionCenterController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DistributionCenterController],
            providers: [DistributionCenterService],
        }).compile();

        controller = module.get<DistributionCenterController>(
            DistributionCenterController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
