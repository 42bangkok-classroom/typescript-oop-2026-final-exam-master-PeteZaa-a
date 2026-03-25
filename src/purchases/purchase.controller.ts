import { Controller, Get } from "@nestjs/common";
import { PurchaseService } from "./purchase.service";

@Controller()
export class PurchaseController {
    constructor(private readonly purchaseservice: PurchaseService) { }

    @Get()
    findAll() {
        const result = this.purchaseservice.findAll()
        return {
            success: true,
            data: result,
            message: 'Fetched purchases successfully'
        }
    }
}