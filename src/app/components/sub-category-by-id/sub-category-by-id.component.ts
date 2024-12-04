import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-sub-category-by-id',
  templateUrl: './sub-category-by-id.component.html',
  styleUrls: ['./sub-category-by-id.component.css']
})
export class SubCategoryByIdComponent {
constructor(private _categoriesService:CategoriesService , private _activatedRoute:ActivatedRoute){}
ngOnInit(){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'))
    this.id=res.get('id')
  })
  
  this.showSubCategoryById(this.id)
}
id!:number;
subCategories:any;
showSubCategoryById(id:number){
  this._categoriesService.getCategoryById(id).subscribe({
next:(res)=>{
  console.log(res);
  this.subCategories=res
},
error:(err)=>{
  console.log(err);
}
  })
}
}
