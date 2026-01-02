import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IEmployeeList } from '../../model/interface/employee.interface';
import { GlobalConstant } from '../../constant/Globalconstant';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getAllEmployee(): Observable<IEmployeeList[]> {
    return this.http.get<IEmployeeList[]>(environment.API_URL+ GlobalConstant.API_END_POINT_CONTROLLER.EMPLOYEE + "/"+ GlobalConstant.API_END_POINT_METHOD.EMPLOYEE.GET_ALL_EMPLOYEE);
  } 

  createNewEmployee(obj: any) {
    return this.http.post(environment.API_URL + "EmployeeApp/CreateEmployee", obj);
  }
}
