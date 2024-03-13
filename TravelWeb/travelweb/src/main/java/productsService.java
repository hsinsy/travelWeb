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

import model.products;
import model.productsDAO;

@Path("/")
public class productsService {
	productsDAO DAO = new productsDAO();

	@GET
	@Path("/products")
	@Produces(MediaType.APPLICATION_JSON)
	public List<products> get() {
		return DAO.findAll();
	}

	/*@GET
	@Path("/products/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getById(@PathParam("id") Long id) {
		products u = DAO.findById(id);
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity("User Not Found").build();
	}*/
	
	@GET
	@Path("/products/{area}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getById(@PathParam("area") String area) {
		products u = DAO.findByArea(area);
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity("Product not found.").build();
	}

	@POST
	@Path("/products/add")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(products product) {
		boolean flag = DAO.addProduct(product);
		if (flag)
			return Response.ok().entity("User added.").build();
		else
			return Response.ok().entity("User id already exists. Add failed.").build();
	}

	@PUT
	@Path("/products/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(products product) {
		boolean flag = DAO.updateProduct(product);
		if (flag)
			return Response.ok().entity("User updated.").build();
		else
			return Response.ok().entity("User does not exist. Update failed.").build();
	}

	@DELETE
	@Path("/products/{id}")
	public Response delete(@PathParam("id") long id) {
		boolean flag = DAO.deleteProduct(id);
		if (flag)
			return Response.ok().entity("User deleted.").build();
		else
			return Response.ok().entity("User does not exist. Delete failed.").build();
	}
}
