/**
 * What is an interface?
 * 
 */

export interface ProductInterface {
    readonly id: number;
    name: string;
    price: number;
    description: string;
    image?: string;
    category: string;
}
