import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './dto/customer.dto';
import { CustomerCreate } from './dto/customer-create.dto';
import { CustomerUpdate } from './dto/custumer-update.dto';
import { msjError } from 'src/common/error-dto/msjError.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('viewall')
  public async viewAll(): Promise<Customer[] | msjError> {
    try {
      return await this.customerService.findAll();
    } catch (err) {
      return { message: err.meta.cause };
    }
  }
  @Get('viewone/:id')
  public async viewOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Customer | null> {
    return this.customerService.findOne(id);
  }

  @Post('new')
  public async newCustomer(
    @Body() customer: CustomerCreate,
  ): Promise<Customer> {
    return this.customerService.createCustomer(customer);
  }

  @Put('update')
  public async updateCustomer(
    @Body() customer: CustomerUpdate,
  ): Promise<Customer | msjError> {
    try {
      return await this.customerService.updateCustomer(customer);
    } catch (err) {
      return { message: err };
    }
  }

  @Delete('delete')
  public async deleteCustomer(id: number): Promise<Customer | msjError> {
    try {
      return await this.customerService.deleteCustomer(id);
    } catch (err) {
      return { message: err };
    }
  }
}
