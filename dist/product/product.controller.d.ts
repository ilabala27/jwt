import { ProductDocument } from './product.schema';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(name: string, price: number, description?: string): Promise<ProductDocument>;
    findAllProducts(): Promise<ProductDocument[]>;
    findProduct(id: string): Promise<ProductDocument>;
    updateProduct(id: string, name: string, price: number, description?: string): Promise<ProductDocument>;
    deleteProduct(id: string): Promise<import("mongodb").DeleteResult>;
}
