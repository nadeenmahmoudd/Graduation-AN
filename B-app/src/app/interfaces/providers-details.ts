export interface ProvidersDetails {
    Data : ProviderInternal[]
       
}
   
    interface ProviderInternal{
        id:number;
        name:string;
        imageUrl:string;
        email:string;
        phone:string;
        description:string;
        address:string
    }