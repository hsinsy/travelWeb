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

import model.members;
import model.membersDAO;
import model.products;

@Path("/")
public class membersService {
	membersDAO DAO = new membersDAO();
	Gson g = new Gson();

	@GET
	@Path("/members")
	@Produces(MediaType.APPLICATION_JSON)
	public List<members> get() {
		return DAO.findAll();
	}

	@GET
	@Path("/members/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getById(@PathParam("id") Long id) {
		members u = DAO.findById(id);
		String str1 = g.toJson("User not found.");
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity(str1).build();
	}

	@GET
	@Path("/members/{account}/{password}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(@PathParam("account") String account, @PathParam("password") String password) {
		boolean flag = DAO.LoginMember(account, password);
		String str1 = g.toJson("Login Success");
		String str2 = g.toJson("User account or password is wrong. Login failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}

	@POST
	@Path("/members/add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response add(members member) {
		boolean flag = DAO.addMember(member);
		String str1 = g.toJson("User added.");
		String str2 = g.toJson("User id already exists. Add Failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}

	@PUT
	@Path("/members/update")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(members member) {
		boolean flag = DAO.updateMember(member);
		String str1 = g.toJson("User updated.");
		String str2 = g.toJson("User does not exist. Update failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}

	@DELETE
	@Path("/members/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") long id) {
		boolean flag = DAO.deleteMember(id);
		String str1 = g.toJson("User deleted.");
		String str2 = g.toJson("User does not exist. Delete failed.");
		if (flag)
			return Response.ok().entity(str1).build();
		else
			return Response.ok().entity(str2).build();
	}
}
