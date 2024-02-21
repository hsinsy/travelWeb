package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class products {
	@Id
	private Long productId;
	private String productName;
	private String productDestination;
	private String productTime;
	private String productDescription;
	private String productNote;
	private Integer productAmountAdult;
	private Integer productAmountChild;

	public products() {
	}

	public products(Long productId, String productName, String productDestination, String productTime,
			String productDescription, String productNote, Integer productAmountAdult, Integer productAmountChild) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDestination = productDestination;
		this.productTime = productTime;
		this.productDescription = productDescription;
		this.productNote = productNote;
		this.productAmountAdult = productAmountAdult;
		this.productAmountChild = productAmountChild;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDestination() {
		return productDestination;
	}

	public void setProductDestination(String productDestination) {
		this.productDestination = productDestination;
	}

	public String getProductTime() {
		return productTime;
	}

	public void setProductTime(String productTime) {
		this.productTime = productTime;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getProductNote() {
		return productNote;
	}

	public void setProductNote(String productNote) {
		this.productNote = productNote;
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

	@Override
	public String toString() {
		return "products [productId=" + productId + ", productName=" + productName + ", productDestination="
				+ productDestination + ", productTime=" + productTime + ", productDescription=" + productDescription
				+ ", productNote=" + productNote + ", productAmountAdult=" + productAmountAdult
				+ ", productAmountChild=" + productAmountChild + "]";
	}

}
