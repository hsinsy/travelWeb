import { Component, OnInit } from '@angular/core';
import { IntervalBlockComponent } from '../../../shared/interval-block/interval-block.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MemberService } from '@api/member-api/member.service';
import { Member } from '@api/member-api/memberType';
import { AdminMemberComponent } from './admin-member/admin-member.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
  imports: [
    IntervalBlockComponent,
    MatTabsModule,
    AdminMemberComponent,
    AdminProductComponent,
    AdminOrderComponent,
  ],
})
export class AdminPageComponent implements OnInit {
  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.onSearchAll();
    this.onSearchByID();
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
    memberName: 'TinaTest',
    memberAccount: 'TinaTest',
    memberPassword: '1234',
    memberEmail: 'TinaTest@mail.com',
    memberPhone: '09870',
    memberAddress: '台北',
  };

  onAddMember(member: Member) {
    this.memberService
      .addMember(member)
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
