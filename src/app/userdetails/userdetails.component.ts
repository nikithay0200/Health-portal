import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  postObj:any;
  constructor(private ar:ActivatedRoute,private fs:FakeDataService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;

    //get data of post with this current id
     this.fs.getPostById(id).subscribe(
       obj=>{
         this.postObj=obj;
       },
       err=>{
         console.log("err is",err);
       }
     )
  }


}
