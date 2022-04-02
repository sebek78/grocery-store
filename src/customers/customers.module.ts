import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './entities/customers.entity';

@Module({
    controllers: [CustomersController],
    providers: [CustomersService],
    exports: [CustomersService],
    imports: [TypeOrmModule.forFeature([Customers])],
})
export class CustomersModule {}
