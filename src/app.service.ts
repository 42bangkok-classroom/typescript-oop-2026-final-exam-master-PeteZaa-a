import { Injectable } from '@nestjs/common';
import type { ApiResponse } from './interfaces/response.interface';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): ApiResponse<T> {
    return 'Hello NestJS';
  }

  private readonly dbProduct = join(process.cwd(), 'data/product.json');
  findAll() {
    const readDb = fs.readFileSync(this.dbProduct, 'utf8');
    return JSON.parse(readDb);
  }
}
