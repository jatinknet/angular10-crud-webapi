import { Component, OnInit } from '@angular/core';

import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }
  DepartmentList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean = false;
  dep:any;

  ngOnInit(): void {
    this.refreshDepartmentList();
  }
  refreshDepartmentList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList = data;
    });
  }

  addClick(){
this.dep={
  DepartmentId: 0,
  DepartmentName: ""
}
this.ModalTitle="Add Department";
this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepartmentList();
  }
}
