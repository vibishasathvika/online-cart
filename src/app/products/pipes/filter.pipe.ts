import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts: [],searchKey:string,propName:string): any[] {
    let result:any = []
    if(!allproducts || searchKey==''|| propName==''){
      return allproducts

    }
     allproducts.forEach((product:any)=>{
      if(product[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(product)
      }
     })

    return result;
  }

}
