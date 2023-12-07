
export interface Equipment {
    
     name?: string,
     price ?: string,
     modelName ?: string,
     familyName?: string,
     description ?: string,
     serialNumber?: string ,

     
}
    
export class CEquipmment implements Equipment{

    constructor( 
    public name?: string,
    public price ?: string,
    public modelName ?: string,
    public familyName?: string,
    public description ?: string,
    public serialNumber?: string ,
    ){}

}
