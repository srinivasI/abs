import {Freeitem} from './freeitem';
export class Recipedata {
    constructor(public name:string,public desc:string,public amount:number,public qty:number,public offer:number,public imgpath:string, public items?:Freeitem[]){}
}
