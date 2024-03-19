import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MemberService } from '@api/member-api/member.service';
import { Member } from '@api/member-api/memberType';

@Component({
  selector: 'app-admin-member',
  standalone: true,
  imports: [
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './admin-member.component.html',
})
export class AdminMemberComponent implements OnInit {
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    console.log('AdminMemberComponent');
  }

  inputIDValue: string = '';

  displayedColumns: string[] = [
    'id',
    'name',
    'account',
    'password',
    'email',
    'phone',
    'address',
    'delete',
  ];

  dataSource: Member[] = [];
  membersData: Member[] = [];

  onSearchByID() {
    this.memberService
      .getMemberByID(this.inputIDValue)
      .subscribe((member: Member) => {
        this.dataSource = [];
        this.dataSource.push(member);
      });
  }

  onSearchAll() {
    this.memberService.getMembers().subscribe((members: Member[]) => {
      this.dataSource = [];
      this.dataSource = members;
    });
  }

  fakeMemberData = {
    // memberId: '99',
    memberName: 'Tina999',
    memberAccount: 'TinaTest2',
    memberPassword: '12344321',
    memberEmail: 'TinaTest2@mail.com',
    memberPhone: '09870',
    memberAddress: '台北',
  };

  fakeMemberData2 = {
    memberId: '909',
    memberName: '小明78',
    memberAccount: 'ming',
    memberPassword: '787887',
    memberEmail: 'ming@mail.com',
    memberPhone: '09789',
    memberAddress: '台北',
  };

  fakeMemberData3 = {
    memberAccount: 'william',
    memberPassword: 'w12345',
  };

  onAddMember(member: Member) {
    this.memberService
      .addMember(member)
      .subscribe((result) => console.log(result));
  }

  onTestLogin() {
    this.memberService
      .getMember(
        this.fakeMemberData3.memberAccount,
        this.fakeMemberData3.memberPassword
      )
      .subscribe((result) => console.log(result));
  }

  onUpdateMember(member: Member) {
    this.memberService
      .updateMember(member)
      .subscribe((result) => console.log(result));
  }

  onDeleteMember(memberID: string) {
    this.memberService
      .deleteMember(memberID)
      .subscribe((result) => console.log(result));
    console.log('memberID: ' + memberID);
    // this.onSearchAll();
  }

  onInput(box: string) {
    console.log(box);
    this.inputIDValue = box;
  }
}
