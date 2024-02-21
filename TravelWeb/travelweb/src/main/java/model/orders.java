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
	private String productNumber;
	private String productName;
	private String productTime;
	private Integer productAmountAdult;
	private Integer productAmountChild;
	private Integer productTotalPrice;

	public orders() {
	}

	public orders(Long orderId, Long memberId, String productNumber, String productName, String productTime,
			Integer productAmountAdult, Integer productAmountChild, Integer productTotalPrice) {
		super();
		this.orderId = orderId;
		this.memberId = memberId;
		this.productNumber = productNumber;
		this.productName = productName;
		this.productTime = productTime;
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

	public String getProductNumber() {
		return productNumber;
	}

	public void setProductNumber(String productNumber) {
		this.productNumber = productNumber;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductTime() {
		return productTime;
	}

	public void setProductTime(String productTime) {
		this.productTime = productTime;
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
		return "orders [orderId=" + orderId + ", memberId=" + memberId + ", productNumber=" + productNumber + ", productName="
				+ productName + ", productTime=" + productTime + ", productAmountAdult=" + productAmountAdult
				+ ", productAmountChild=" + productAmountChild + ", productTotalPrice=" + productTotalPrice + "]";
	}

}
