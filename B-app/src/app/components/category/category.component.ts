import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
constructor( private _categoriesService :CategoriesService , private _activatedRoute :ActivatedRoute){}
ngOnInit(){
  this._activatedRoute.paramMap.subscribe((res:any)=>{
    console.log(res.get('id'))
    this.id=res.get('id')
  })
  this._activatedRoute.params.subscribe(params=>{
    const categoryId= params['id'];
    this.getCategoryById(this.id)
  })

}
id!:number;
getCategoryById(id:number){
this._categoriesService.getCategoryById(id).subscribe({
  next:(res)=>{
    console.log(res);
  },
  error:(err)=>{
    console.log(err);
  }
})
}
}
