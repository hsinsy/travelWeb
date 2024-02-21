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

import model.orders;
import model.ordersDAO;

@Path("/")
public class ordersService {
	ordersDAO DAO = new ordersDAO();

	@GET
	@Path("/orders")
	@Produces(MediaType.APPLICATION_JSON)
	public List<orders> get() {
		return DAO.findAll();
	}

	@GET
	@Path("/orders/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getById(@PathParam("id") Long id) {
		orders u = DAO.findById(id);
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity("User Not Found").build();
	}

	@POST
	@Path("/orders/add")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(orders order) {
		boolean flag = DAO.addOrder(order);
		if (flag)
			return Response.ok().entity("User add to Table").build();
		else
			return Response.ok().entity(order.getOrderId() + " User id already exists").build();
	}

	@PUT
	@Path("/orders/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(orders order) {
		boolean flag = DAO.updateOrder(order);
		if (flag)
			return Response.ok().entity("User updated ").build();
		else
			return Response.ok().entity(order.getOrderId() + " User is not exists Update Failed").build();
	}

	@DELETE
	@Path("/orders/{id}")
	public Response delete(@PathParam("id") long id) {
		boolean flag = DAO.deleteOrder(id);
		if (flag)
			return Response.ok().entity("User Deleted ").build();
		else
			return Response.ok().entity(id + " User is not exists Delete Failed").build();
	}
}
