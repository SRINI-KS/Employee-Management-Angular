import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmpDetails } from 'src/app/Models/Employee/emp-details';
import { EmpViewService } from 'src/app/Services/EmployeeDisplay/emp-view.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
  providers:[MatDialog]
})
export class EmployeeViewComponent implements OnInit {

  public employees!:EmpDetails[];
  public empId!: EmpDetails;
  public deleteId!:number;
  ngOnInit(){
    this.getEmployees();
  }

  constructor(private empService:EmpViewService) { }

 // get employee id

 getEmpId(employee:EmpDetails){
  this.empId=employee;
 }
 deleteEmpId(id:number){
this.deleteId=id;
 }

  public getEmployees():void{
    this.empService.getEmployees().subscribe(
    
      (response:EmpDetails[])=>{
        this.employees=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }

      );
    
  }
  public onAddEmployee(addForm:NgForm):void{
   document.getElementById("closeAddEmp")?.click()
    this.empService.addEmployees(addForm.value).subscribe(
      (Response:EmpDetails)=>{
        console.log(Response);
        this.getEmployees();
        addForm.resetForm();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.resetForm();

      }
      );
    
  }
 
  public onUpdateEmployee(emp:EmpDetails):void{
     this.empService.updatateEmployees(emp).subscribe(
       (Response:EmpDetails)=>{
         console.log(Response);
         this.getEmployees();
       },
       (error:HttpErrorResponse)=>{
         alert(error.message);
       }
       );
     
   }
   public deleteEmployee(emp:number):void{
    this.empService.deleteEmployees(emp).subscribe(
      call=>{
        this.getEmployees();
      }
   
      
    )
   }

 
}
