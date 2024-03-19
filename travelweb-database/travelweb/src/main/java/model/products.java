package model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class products {
	@Id
	private Long productId;
	private String productCode;
	private String productName;
	private String productArea;
	private String productImgUrl;
	private String startDate;
	private String endDate;
	private Integer travelDays;
	private Integer productPriceAdult;
	private Integer productPriceChild;

	public products() {
	}

	public products(Long productId, String productCode, String productName, String productArea, String productImgUrl,
			String startDate, String endDate, Integer travelDays, Integer productPriceAdult,
			Integer productPriceChild) {
		super();
		this.productId = productId;
		this.productCode = productCode;
		this.productName = productName;
		this.productArea = productArea;
		this.productImgUrl = productImgUrl;
		this.startDate = startDate;
		this.endDate = endDate;
		this.travelDays = travelDays;
		this.productPriceAdult = productPriceAdult;
		this.productPriceChild = productPriceChild;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
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

	public String getProductArea() {
		return productArea;
	}

	public void setProductArea(String productArea) {
		this.productArea = productArea;
	}

	public String getProductImgUrl() {
		return productImgUrl;
	}

	public void setProductImgUrl(String productImgUrl) {
		this.productImgUrl = productImgUrl;
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

	public Integer getTravelDays() {
		return travelDays;
	}

	public void setTravelDays(Integer travelDays) {
		this.travelDays = travelDays;
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
		return "products [productId=" + productId + ", productCode=" + productCode + ", productName=" + productName
				+ ", productArea=" + productArea + ", productImgUrl=" + productImgUrl + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", travelDays=" + travelDays + ", productPriceAdult=" + productPriceAdult
				+ ", productPriceChild=" + productPriceChild + "]";
	}
}
