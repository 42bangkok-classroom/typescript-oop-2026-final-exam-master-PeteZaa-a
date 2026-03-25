import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { ApiResponse } from './interfaces/response.interface';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ApiResponse<T> {
    const result = this.appService.getHello();
    return {
      "success": true,
      "data": {
        "service": 'purchase-api',
        "version": '1.0.0'
      },
      "message": 'Hello NestJS'
    }
  }
  @Get()
  findAll(): ApiResponse<T> {
    const result = this.appService.findAll();
    return {
      "success": true,
      "data": result,
      "message": 'Fetched products successfully'
    }

  }
}
