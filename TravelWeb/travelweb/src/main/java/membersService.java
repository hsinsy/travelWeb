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

@Path("/")
public class membersService {
	membersDAO DAO = new membersDAO();

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
		if (u != null)
			return Response.ok().entity(u).build();
		else
			return Response.ok().entity("User Not Found").build();
	}

	@POST
	@Path("/members/add")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(members member) {
		boolean flag = DAO.addMember(member);
		if (flag)
			return Response.ok().entity("User add to Table").build();
		else
			return Response.ok().entity(member.getMemberId() + " User id already exists").build();
	}

	@PUT
	@Path("/members/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(members member) {
		boolean flag = DAO.updateMember(member);
		if (flag)
			return Response.ok().entity("User updated ").build();
		else
			return Response.ok().entity(member.getMemberId() + " User is not exists Update Failed").build();
	}

	@DELETE
	@Path("/members/{id}")
	public Response delete(@PathParam("id") long id) {
		boolean flag = DAO.deleteMember(id);
		if (flag)
			return Response.ok().entity("User Deleted ").build();
		else
			return Response.ok().entity(id + " User is not exists Delete Failed").build();
	}
}
