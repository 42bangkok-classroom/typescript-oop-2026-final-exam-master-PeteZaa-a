import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly purchaseservice: PurchaseService) {}

  @Get()
  findAll() {
    const result = this.purchaseservice.findAll();
    return {
      success: true,
      data: result,
      message: 'Fetched purchases successfully',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const result = this.purchaseservice.findOne(id);
    return {
      success: true,
      data: result,
      message: 'Fetched purchase successfully',
    };
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    const result = this.purchaseservice.remove(id);
    if (id) {
      return {
        success: true,
        data: result,
        message: `Deleted purchase with id ${id} sucessfully`,
      };
    }
  }
}
