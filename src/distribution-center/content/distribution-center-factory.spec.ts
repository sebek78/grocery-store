import { DistributionCenterFactory } from './distribution-center-factory';

describe('DistributionCenter', () => {
    it('should be defined', () => {
        expect(new DistributionCenterFactory(1)).toBeDefined();
    });
});
