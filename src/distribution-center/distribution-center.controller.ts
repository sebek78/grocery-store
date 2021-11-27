import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { DistributionCenterService } from './distribution-center.service';
import { CreateDistributionCenterDto } from './dto/create-distribution-center.dto';
import { UpdateDistributionCenterDto } from './dto/update-distribution-center.dto';

@Controller('distribution-center')
export class DistributionCenterController {
    constructor(
        private readonly distributionCenterService: DistributionCenterService,
    ) {}

    /*@Post()
    create(@Body() createDistributionCenterDto: CreateDistributionCenterDto) {
        return this.distributionCenterService.create(
            createDistributionCenterDto,
        );
    }

    @Get()
    findAll() {
        return this.distributionCenterService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.distributionCenterService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateDistributionCenterDto: UpdateDistributionCenterDto,
    ) {
        return this.distributionCenterService.update(
            +id,
            updateDistributionCenterDto,
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.distributionCenterService.remove(+id);
    }*/
}
