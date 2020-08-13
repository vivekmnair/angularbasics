import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usersettings } from './usersettings'
import { LoginComponent } from './login/login.component';
import { login } from './loginobject'
import { search } from './searchobject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {

    console.log("Inside Get Data Call")
    return this.httpClient.get("http://localhost:5000/getusers")
  }

  postUserSettingsForm(usersettings: Usersettings): Observable<any> {
    console.log("inside service...")
    return this.httpClient.post("http://127.0.0.1:5000/usersaveform", usersettings)
  }

  deleteUserSettingsFormById(id): Observable<any> {
    console.log("delete member by service call", id)
    let p = new HttpParams().set('userid', id);
    return this.httpClient.delete("http://127.0.0.1:5000/deleteuserform", { params: p })
  }

  editUserSettingsFormById(id): Observable<any> {
    console.log("edit member by service call", id)
    let q = new HttpParams().set('userid', id);
    return this.httpClient.get("http://127.0.0.1:5000/edituserform", { params: q })
  }

  saveUserSettingsForm(usersettings: Usersettings): Observable<any> {
    console.log("inside service...")
    return this.httpClient.post("http://127.0.0.1:5000/usersaveform", usersettings)
  }

  posteditUserForm(usersettings: Usersettings, id): Observable<any> {
    console.log("inside postedituserformservice...")
    let q = new HttpParams().set('userid', id);
    return this.httpClient.post("http://127.0.0.1:5000/editusersaveform", usersettings, { params: q })
  }

  loginmethod(loginsettings: login): Observable<any> {
    console.log("inside loginmethod...")
    
    return this.httpClient.post("http://127.0.0.1:5000/loginform", loginsettings)
  }

  logout(): Observable<any> {
    console.log("inside logout..")
    return this.httpClient.get("http://127.0.0.1:5000/logoutform")
  }

  searchuserform(searchuse: Usersettings): Observable<any> {
    console.log("inside searchuserformservice...")
    return this.httpClient.post("http://127.0.0.1:5000/searchuserform", searchuse)
  }
}


 
