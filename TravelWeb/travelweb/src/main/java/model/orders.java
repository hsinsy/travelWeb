package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class orders {
	@Id
	private Long orderId;
	private Long memberId;
	private String productCode;
	private String productName;
	private String startDate;
	private String endDate;
	private Integer productAmountAdult;
	private Integer productAmountChild;
	private Integer productTotalPrice;

	public orders() {
	}

	public orders(Long orderId, Long memberId, String productCode, String productName,
				  String startDate, String endDate, Integer productAmountAdult,
				  Integer productAmountChild, Integer productTotalPrice) {
		super();
		this.orderId = orderId;
		this.memberId = memberId;
		this.productCode = productCode;
		this.productName = productName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.productAmountAdult = productAmountAdult;
		this.productAmountChild = productAmountChild;
		this.productTotalPrice = productTotalPrice;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public Long getMemberId() {
		return memberId;
	}

	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	
	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public Integer getProductAmountAdult() {
		return productAmountAdult;
	}

	public void setProductAmountAdult(Integer productAmountAdult) {
		this.productAmountAdult = productAmountAdult;
	}

	public Integer getProductAmountChild() {
		return productAmountChild;
	}

	public void setProductAmountChild(Integer productAmountChild) {
		this.productAmountChild = productAmountChild;
	}

	public Integer getProductTotalPrice() {
		return productTotalPrice;
	}

	public void setProductTotalPrice(Integer productTotalPrice) {
		this.productTotalPrice = productTotalPrice;
	}

	@Override
	public String toString() {
		return "orders [orderId=" + orderId + ", memberId=" + memberId + ", productCode=" + productCode
				+ ", productName=" + productName + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", productAmountAdult=" + productAmountAdult + ", productAmountChild=" + productAmountChild
				+ ", productTotalPrice=" + productTotalPrice + "]";
	}
}
