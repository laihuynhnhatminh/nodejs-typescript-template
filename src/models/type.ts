/**
 * What is type?
 * 
 */

export type ProductType = {
    readonly id: number;
    name: string;
    price: number;
    description: string;
    image?: string;
    category: string;
}

/**
 * {ProductKeys} is a type that represents the keys of ProductType.
 * ProductKeys = 'id' | 'name' | 'price' | 'description' | 'image' | 'category'
 */
export type ProductKeys = keyof ProductType;

