package model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.ws.rs.NotFoundException;

public class membersDAO {
	private static List<members> member = new ArrayList<members>();

	public EntityManager getManager() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("travelweb");
		return factory.createEntityManager();
	}

	public List<members> findAll() {
		Query query = getManager().createQuery("select m from members m");
		member = (List<members>) query.getResultList();
		return member;
	}

	public members findById(long id) throws NotFoundException {
		if (member.size() == 0)
			findAll();
		members x = member.stream().filter(m -> m.getMemberId().equals(id)).findAny().orElse(null);
		return x;
	}

	public members findByAccount(String account) throws NotFoundException {
		if (member.size() == 0)
			findAll();
		members x = member.stream().filter(m -> m.getMemberAccount().equals(account)).findAny().orElse(null);
		return x;
	}

	public members findByPassword(String password) throws NotFoundException {
		if (member.size() == 0)
			findAll();
		members x = member.stream().filter(m -> m.getMemberPassword().equals(password)).findAny().orElse(null);
		return x;
	}

	public members LoginMember(String account, String password) {
		if (findByAccount(account) != null && findByPassword(password) != null)
			return findByAccount(account);
		else
			return null;
	}

	public boolean addMember(members m1) {
		if (member.size() == 0)
			findAll();
		members x = member.stream().filter(m -> m.getMemberId().equals(m1.getMemberId())).findAny().orElse(null);
		if (x == null) {
			EntityManager mgr = getManager();
			mgr.getTransaction().begin();
			mgr.persist(m1);
			mgr.getTransaction().commit();
			return true;
		} else {
			return false;
		}
	}

	public boolean updateMember(members member) {
		EntityManager mgr = getManager();
		members x = mgr.find(members.class, member.getMemberId());
		if (x != null) {
			mgr.getTransaction().begin();
			mgr.merge(member);
			mgr.getTransaction().commit();
			return true;
		} else
			return false;
	}

	public boolean deleteMember(long id) {
		EntityManager mgr = getManager();
		members x = mgr.find(members.class, id);
		if (x != null) {
			mgr.getTransaction().begin();
			mgr.remove(x);
			mgr.getTransaction().commit();
			return true;
		} else
			return false;
	}
}
