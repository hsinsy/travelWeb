import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

import model.orders;
import model.ordersDAO;

@Path("/")
public class ordersService {
	ordersDAO DAO = new ordersDAO();
	Gson g = new Gson();

	@GET
	@Path("/orders")
	@Produces(MediaType.APPLICATION_JSON)
	public List<orders> get() {
		return DAO.findAll();
	}
	
	/*@GET
	@Path("/orders/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getById(@PathParam("id") Long id) {
		List<orders> u = DAO.findByMemberId(id);
		String str1 = g.toJson("Order not found.");
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity(str1).build();
	}*/
	
	@GET
	@Path("/orders/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getById(@PathParam("id") Long id) {
		orders u = DAO.findByMemberId(id);
		String str1 = g.toJson("Order not found.");
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity(str1).build();
	}

	@POST
	@Path("/orders/add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response add(orders order) {
		boolean flag = DAO.addOrder(order);
		String str1 = g.toJson("Order added.");
		String str2 = g.toJson("Order id already exists. Add Failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}

	@PUT
	@Path("/orders/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(orders order) {
		boolean flag = DAO.updateOrder(order);
		String str1 = g.toJson("Order updated.");
		String str2 = g.toJson("Order does not exist. Update Failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}

	@DELETE
	@Path("/orders/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") long id) {
		boolean flag = DAO.deleteOrder(id);
		String str1 = g.toJson("Order Deleted.");
		String str2 = g.toJson("Order does not exist. Delete Failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}
}
