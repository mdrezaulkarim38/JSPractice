import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee/employee-service';
import { CommonModule } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { IEmployeeList } from '../../../core/model/interface/employee.interface';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  employeeService = inject(EmployeeService);
  employeeList: IEmployeeList [] = [];
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.employeeService.getAllEmployee().subscribe((res:IEmployeeList[])=>{
      this.employeeList = res;
    });
  }
}
