package model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.ws.rs.NotFoundException;

public class ordersDAO {
	private static List<orders> order = new ArrayList<orders>();

	public EntityManager getManager() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("travelweb");
		return factory.createEntityManager();
	}

	public List<orders> findAll() {
		Query query = getManager().createQuery("select o from orders o");
		order = (List<orders>) query.getResultList();
		return order;
	}

	public orders findById(long id) throws NotFoundException {
		if (order.size() == 0)
			findAll();
		orders x = order.stream().filter(o -> o.getOrderId().equals(id)).findAny().orElse(null);
		return x;
	}
	
	/*public List<orders> findByMemberId(long id) {
		Query query = getManager().createQuery("select o from orders o where orders.memberId=?1");
		order = (List<orders>) query.getResultList();
		return order;
	}*/

	public orders findByMemberId(long id) throws NotFoundException {
		if (order.size() == 0)
			findAll();
		orders x = order.stream().filter(o -> o.getMemberId().equals(id)).findAny().orElse(null);
		return x;
	}

	public boolean addOrder(orders o1) {
		if (order.size() == 0)
			findAll();
		orders x = order.stream().filter(o -> o.getOrderId().equals(o1.getOrderId())).findAny().orElse(null);
		if (x == null) {
			EntityManager mgr = getManager();
			mgr.getTransaction().begin();
			mgr.persist(o1);
			mgr.getTransaction().commit();
			return true;
		} else {
			return false;
		}
	}

	public boolean updateOrder(orders order) {
		EntityManager mgr = getManager();
		orders x = mgr.find(orders.class, order.getOrderId());
		if (x != null) {
			mgr.getTransaction().begin();
			mgr.merge(order);
			mgr.getTransaction().commit();
			return true;
		} else
			return false;
	}

	public boolean deleteOrder(long id) {
		EntityManager mgr = getManager();
		orders x = mgr.find(orders.class, id);
		if (x != null) {
			mgr.getTransaction().begin();
			mgr.remove(x);
			mgr.getTransaction().commit();
			return true;
		} else
			return false;
	}
}
