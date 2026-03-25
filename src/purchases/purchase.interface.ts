export interface Purchase {
    id: string
    customerName: string
    pruchaseDate: string
    items: [
        PurchaseItem
    ]
}

export interface PurchaseItem {
    productId: number
    quantity: number
    price: number
}