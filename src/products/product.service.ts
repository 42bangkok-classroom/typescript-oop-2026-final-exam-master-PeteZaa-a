import { join } from 'path';
import * as fs from 'fs';

export class ProductService {
  private readonly dbProduct = join(process.cwd(), 'data/products.json');

  findAll() {
    const readDb = fs.readFileSync(this.dbProduct, 'utf8');
    return JSON.parse(readDb);
  }
}
