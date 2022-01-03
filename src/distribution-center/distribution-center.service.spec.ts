import { Test, TestingModule } from '@nestjs/testing';
import { DistributionCenterService } from './distribution-center.service';

describe('DistributionCenterService', () => {
    let service: DistributionCenterService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DistributionCenterService],
        }).compile();

        service = module.get<DistributionCenterService>(
            DistributionCenterService,
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
