export interface Purchase {
  id: number;
  customerName: string;
  pruchaseDate: string;
  items: [PurchaseItem];
  totalPrice: number;
}

export interface PurchaseItem {
  productId: number;
  quantity: number;
  price: number;
}
