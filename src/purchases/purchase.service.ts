import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class PurchaseService {
  private readonly dbPathPurchase = join(process.cwd(), 'data/purchase.json');

  findAll() {
    const readDb = fs.readFileSync(this.dbPathPurchase, 'utf8');
    return JSON.parse(readDb) as string;
  }
}
