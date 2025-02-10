export interface Products {
    id:number,
    quantity:number 
    product : Product[]
    price:number,
    name:string,
    imageUrl:string,
    description:string
}
interface Product{
    price:number,
    name:string,
    imageUrl:string,
    description:string
}
