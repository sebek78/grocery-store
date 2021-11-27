import { Module } from '@nestjs/common';
import { DistributionCenterService } from './distribution-center.service';
import { DistributionCenterController } from './distribution-center.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DistributionCenter } from './entities/distribution-center.entity';

@Module({
    controllers: [DistributionCenterController],
    providers: [DistributionCenterService],
    exports: [DistributionCenterService],
    imports: [TypeOrmModule.forFeature([DistributionCenter])],
})
export class DistributionCenterModule {}
