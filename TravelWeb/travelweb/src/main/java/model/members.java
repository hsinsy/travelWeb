package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="members")
public class members {
	@Id
	private Long memberId;
	private String memberName;
	private String memberAccount;
	private String memberPassword;
	private String memberEmail;
	private String memberPhone;
	private String memberAddress;

	public members() {
	}

	public members(Long memberId, String memberName, String memberAccount, String memberPassword, String memberEmail,
			String memberPhone, String memberAddress) {
		super();
		this.memberId = memberId;
		this.memberName = memberName;
		this.memberAccount = memberAccount;
		this.memberPassword = memberPassword;
		this.memberEmail = memberEmail;
		this.memberPhone = memberPhone;
		this.memberAddress = memberAddress;
	}

	public Long getMemberId() {
		return memberId;
	}

	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}

	public String getMemberName() {
		return memberName;
	}

	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}

	public String getMemberAccount() {
		return memberAccount;
	}

	public void setMemberAccount(String memberAccount) {
		this.memberAccount = memberAccount;
	}

	public String getMemberPassword() {
		return memberPassword;
	}

	public void setMemberPassword(String memberPassword) {
		this.memberPassword = memberPassword;
	}

	public String getMemberEmail() {
		return memberEmail;
	}

	public void setMemberEmail(String memberEmail) {
		this.memberEmail = memberEmail;
	}

	public String getMemberPhone() {
		return memberPhone;
	}

	public void setMemberPhone(String memberPhone) {
		this.memberPhone = memberPhone;
	}

	public String getMemberAddress() {
		return memberAddress;
	}

	public void setMemberAddress(String memberAddress) {
		this.memberAddress = memberAddress;
	}

	@Override
	public String toString() {
		return "members [memberId=" + memberId + ", memberName=" + memberName + ", memberAccount=" + memberAccount
				+ ", memberPassword=" + memberPassword + ", memberEmail=" + memberEmail + ", memberPhone=" + memberPhone
				+ ", memberAddress=" + memberAddress + "]";
	}

}
