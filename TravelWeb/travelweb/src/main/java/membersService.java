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

import model.members;
import model.membersDAO;
import model.products;

@Path("/")
public class membersService {
	membersDAO DAO = new membersDAO();

	@GET
	@Path("/members")
	@Produces(MediaType.APPLICATION_JSON)
	public List<members> get() {
		return DAO.findAll();
	}
	
	/*@GET
	@Path("/members/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getById(@PathParam("id") Long id) {
		members u = DAO.findById(id);
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity("User Not Found").build();
	}*/
	
	@GET
	@Path("/members/{account}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getByAccount(@PathParam("account") String account) {
		members a = DAO.findByAccount(account);
		if (a != null)
			return Response.ok().entity(a).build();
		else
			return Response.ok().entity("User not found.").build();	
	}
	
	@GET
	@Path("/members/{account}/{password}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(@PathParam("account") String account, @PathParam("password") String password) {
		boolean flag = DAO.LoginMember(account, password);
		if(flag)
			return Response.ok().entity("Login success.").build();
		else
			return Response.ok().entity("User account or password is wrong. Login failed.").build();
	}

	@POST
	@Path("/members/add")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(members member) {
		boolean flag = DAO.addMember(member);
		if (flag)
			return Response.ok().entity("User added.").build();
		else
			return Response.ok().entity("User id already exists. Add Failed.").build();
	}

	@PUT
	@Path("/members/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(members member) {
		boolean flag = DAO.updateMember(member);
		if (flag)
			return Response.ok().entity("User updated.").build();
		else
			return Response.ok().entity("User does not exist. Update failed.").build();
	}

	@DELETE
	@Path("/members/{id}")
	public Response delete(@PathParam("id") long id) {
		boolean flag = DAO.deleteMember(id);
		if (flag)
			return Response.ok().entity("User deleted.").build();
		else
			return Response.ok().entity("User does not exist. Delete failed.").build();
	}
}
