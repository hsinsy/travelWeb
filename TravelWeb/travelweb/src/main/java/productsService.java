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
import model.products;
import model.productsDAO;

@Path("/")
public class productsService {
	productsDAO DAO = new productsDAO();
	Gson g = new Gson();

	@GET
	@Path("/products")
	@Produces(MediaType.APPLICATION_JSON)
	public List<products> get() {
		return DAO.findAll();
	}

	@GET
	@Path("/products/{area}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getByArea(@PathParam("area") String area) {
		List<products> u = DAO.findByArea(area);
		String str1 = g.toJson("Product not found.");
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity(str1).build();
	}
	
//	@GET
//	@Path("/products/{area}")
//	@Produces(MediaType.APPLICATION_JSON)
//	public Response getByArea(@PathParam("area") String area) {
//		products u = DAO.findByArea(area);
//		String str1 = g.toJson("Product not found.");
//		if (u != null)
//			return Response.ok().entity(u).build();
//		else
//			return Response.ok().entity(str1).build();
//	}

	@POST
	@Path("/products/add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response add(products product) {
		boolean flag = DAO.addProduct(product);
		String str1 = g.toJson("Product added.");
		String str2 = g.toJson("Product id already exists. Add failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}

	@PUT
	@Path("/products/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(products product) {
		boolean flag = DAO.updateProduct(product);
		String str1 = g.toJson("Product updated.");
		String str2 = g.toJson("Product does not exist. Update failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}

	@DELETE
	@Path("/products/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") long id) {
		boolean flag = DAO.deleteProduct(id);
		String str1 = g.toJson("Product deleted.");
		String str2 = g.toJson("Product does not exist. Delete failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}
}
