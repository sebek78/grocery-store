import { PartialType } from '@nestjs/mapped-types';
import { CreateDistributionCenterDto } from './create-distribution-center.dto';

export class UpdateDistributionCenterDto extends PartialType(
    CreateDistributionCenterDto,
) {}
