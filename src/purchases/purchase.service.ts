import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { Purchase } from './purchase.interface';

@Injectable()
export class PurchaseService {
  private readonly dbPathPurchase = join(process.cwd(), 'data/purchases.json');

  findAll(): Purchase[] {
    const readDb = fs.readFileSync(this.dbPathPurchase, 'utf8');
    return JSON.parse(readDb) as [];
  }

  findOne(id: number) {
    const data = this.findAll();
    const findOne = data.find((e) => e.id === id);
    return findOne;
  }

  remove(id: number) {
    const data = this.findAll();
    const del = data.filter((e) => e.id !== id);

    if (data.length === del.length) {
      return {
        success: false,
        data: null,
        message: `Purchase with id ${id} not found`,
      };
    }
    fs.writeFileSync(this.dbPathPurchase, JSON.stringify(data, null, 2));
    return {
      success: true,
      data: null,
      message: `Deleted purchase with id ${id} successfully`,
    };
  }
}
