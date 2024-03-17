package model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.ws.rs.NotFoundException;

public class productsDAO {
	private static List<products> product = new ArrayList<products>();

	public EntityManager getManager() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("travelweb");
		return factory.createEntityManager();
	}

	public List<products> findAll() {
		Query query = getManager().createQuery("select p from products p");
		product = (List<products>) query.getResultList();
		return product;
	}

	public products findById(long id) throws NotFoundException {
		if (product.size() == 0)
			findAll();
		products x = product.stream().filter(p -> p.getProductId().equals(id)).findAny().orElse(null);
		return x;
	}
	
	/*public List<products> findByArea(String area ) {
		Query query = getManager().createQuery("select p from products p where products.area=?1");
		product = (List<products>) query.getResultList();
		return product;
	}*/

	public products findByArea(String area) throws NotFoundException {
		if (product.size() == 0)
			findAll();
		products x = product.stream().filter(p -> p.getProductArea().equals(area)).findAny().orElse(null);
		return x;
	}

	public boolean addProduct(products p1) {
		if (product.size() == 0)
			findAll();
		products x = product.stream().filter(p -> p.getProductId().equals(p1.getProductId())).findAny().orElse(null);
		if (x == null) {
			EntityManager mgr = getManager();
			mgr.getTransaction().begin();
			mgr.persist(p1);
			mgr.getTransaction().commit();
			return true;
		} else {
			return false;
		}
	}

	public boolean updateProduct(products product) {
		EntityManager mgr = getManager();
		products x = mgr.find(products.class, product.getProductId());
		if (x != null) {
			mgr.getTransaction().begin();
			mgr.merge(product);
			mgr.getTransaction().commit();
			return true;
		} else
			return false;
	}

	public boolean deleteProduct(long id) {
		EntityManager mgr = getManager();
		products x = mgr.find(products.class, id);
		if (x != null) {
			mgr.getTransaction().begin();
			mgr.remove(x);
			mgr.getTransaction().commit();
			return true;
		} else
			return false;
	}
}
