package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class products {
	@Id
	private Long productId;
	private String productNumber;
	private String productName;
	private String productDestination;
	private String productTime;
	private String productDescription;
	private String productNote;
	private Integer productPriceAdult;
	private Integer productPriceChild;

	public products() {
	}

	public products(Long productId, String productNumber, String productName, String productDestination, String productTime,
			String productDescription, String productNote, Integer productPriceAdult, Integer productPriceChild) {
		super();
		this.productId = productId;
		this.productNumber = productNumber;
		this.productName = productName;
		this.productDestination = productDestination;
		this.productTime = productTime;
		this.productDescription = productDescription;
		this.productNote = productNote;
		this.productPriceAdult = productPriceAdult;
		this.productPriceChild = productPriceChild;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
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

	public Integer getProductPriceAdult() {
		return productPriceAdult;
	}

	public void setProductPriceAdult(Integer productPriceAdult) {
		this.productPriceAdult = productPriceAdult;
	}

	public Integer getProductPriceChild() {
		return productPriceChild;
	}

	public void setProductPriceChild(Integer productPriceChild) {
		this.productPriceChild = productPriceChild;
	}

	@Override
	public String toString() {
		return "products [productId=" + productId + ", productNumber=" + productNumber + ", productName=" + productName + ", productDestination="
				+ productDestination + ", productTime=" + productTime + ", productDescription=" + productDescription
				+ ", productNote=" + productNote + ", productPriceAdult=" + productPriceAdult
				+ ", productPriceChild=" + productPriceChild + "]";
	}
}
