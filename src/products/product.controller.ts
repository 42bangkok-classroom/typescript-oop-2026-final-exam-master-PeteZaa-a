import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productservice: ProductService) {}

  @Get()
  findAll() {
    const result = this.productservice.findAll();
    return {
      success: true,
      data: result,
      message: 'Fetched products successfully',
    };
  }
}
