import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private _categoriesService:CategoriesService){}
  categories:any;
  ngOnInit(){
    this.showCategories()
  }
  
showCategories(){
  this._categoriesService.getAllCategories().subscribe({
next:(res)=>{
  console.log(res);
  this.categories=res
},
error:(err)=>{
  console.log(err);
  
}
  })
}

}
