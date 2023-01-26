package com.jsp.dto;

public class MemberVO {

	private String MemberId;
	private String MemberPwd;
	private String MemberName;
	private String MemberPhone;
	private String MemberEmail;
	private String MemberAuthority;
	private String MemberAddress;
	
	
	public MemberVO() {
	}

	public MemberVO(String memberId, String memberPwd, String memberName, String memberPhone, String memberEmail,
			String memberPicture, String memberAuthority, String memberAddress) {
		super();
		MemberId = memberId;
		MemberPwd = memberPwd;
		MemberName = memberName;
		MemberPhone = memberPhone;
		MemberEmail = memberEmail;
		MemberAddress = memberAddress;
		MemberAuthority = memberAuthority;
	}

	public String getMemberId() {
		return MemberId;
	}

	public void setMemberId(String memberId) {
		MemberId = memberId;
	}

	public String getMemberPwd() {
		return MemberPwd;
	}

	public void setMemberPwd(String memberPwd) {
		MemberPwd = memberPwd;
	}

	public String getMemberName() {
		return MemberName;
	}

	public void setMemberName(String memberName) {
		MemberName = memberName;
	}

	public String getMemberPhone() {
		return MemberPhone;
	}

	public void setMemberPhone(String memberPhone) {
		MemberPhone = memberPhone;
	}

	public String getMemberEmail() {
		return MemberEmail;
	}

	public void setMemberEmail(String memberEmail) {
		MemberEmail = memberEmail;
	}

	public String getMemberAuthority() {
		return MemberAuthority;
	}

	public void setMemberAuthority(String memberAuthority) {
		MemberAuthority = memberAuthority;
	}

	public String getMemberAddress() {
		return MemberAddress;
	}

	public void setMemberAddress(String memberAddress) {
		MemberAddress = memberAddress;
	}

}
