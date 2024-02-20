import { talepturleri } from "../data/tumdata";
export default function CategoryPic(tur:string){
   let foundTur= talepturleri.find(t=>t.name===tur);
   return foundTur?.slug;
}