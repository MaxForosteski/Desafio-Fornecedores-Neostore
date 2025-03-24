package neostore.resources;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

/**
 *
 * @author 
 */
@Path("/jakartaee11")
public class JakartaEE11Resource {
    
    @GET
    @Path("/ping")
    public Response ping(){
        return Response
                .ok("ping Jakarta EE")
                .build();
    }
}
