import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from './memberType';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl = 'http://localhost:8080/travelweb/members';

  constructor(private http: HttpClient) {}

  // get all members (test ok)
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl).pipe(
      // tap(console.log),
      catchError((err) => {
        throw 'error in getMembers' + err;
      })
    );
  }

  // get a member by id  (test ok, if no result then return [])
  getMemberByID(id: string): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + '/' + id).pipe(
      // tap(console.log),
      catchError((err) => {
        console.log(err);
        throw 'error in getMemberByID' + err;
      })
    );
  }

  // get a member by account & pwd (authentication) (ida test OK)
  // if password == '-1', return member object (for reset pwd page)
  getMember(account: string, password: string): Observable<Member> {
    return this.http
      .get<any>(this.baseUrl + '/' + account + '/' + password)
      .pipe(
        tap(console.log),
        catchError((err) => {
          throw 'error in getMember' + err;
        })
      );
  }

  // add a member to DB(register) (test ok,等後端改回傳值型態為json,就不會catch error)
  addMember(member: Member): Observable<Member> {
    return this.http.post<string>(this.baseUrl + '/add', member).pipe(
      tap(console.log),
      catchError((err) => {
        console.log(err);
        throw 'error in addMember' + err;
      })
    );
  }

  // update a member info by member id (test ok) => 但是使用者不知道自己的id，所以不能用
  updateMember(member: Member): Observable<Member> {
    return this.http.put<string>(this.baseUrl + '/update', member).pipe(
      tap(console.log),
      catchError((err) => {
        console.log(err);
        throw 'error in updateMember' + err;
      })
    );
  }

  // delete a member by member ID (test ok)
  deleteMember(memberID: string): Observable<string> {
    return this.http.delete<any>(this.baseUrl + '/' + memberID).pipe(
      tap(console.log),
      catchError((err) => {
        console.log(err);
        throw 'error in deleteMember' + err;
      })
    );
  }
}
