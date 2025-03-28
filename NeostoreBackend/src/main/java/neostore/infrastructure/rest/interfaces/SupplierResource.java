/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore.infrastructure.rest.interfaces;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import neostore.application.SupplierService;
import neostore.application.SupplierService;
import neostore.domain.entity.Supplier;
import neostore.domain.vo.CNPJ;

/**
 *
 * @author Everto_Clewito_Riber
 */
@Path("/suppliers")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@RequestScoped
public class SupplierResource {

    private static final Logger LOGGER = Logger.getLogger("Resoruce");
    
    @Inject
    private SupplierService supplierService;
    
     

    @GET
    @Path("/teste")
    public Response teste() {
        return Response.ok("teste").build();
    }

    @GET
    @Path("/{id}")
    public Response SupplierById(@PathParam("id") Long id) {
        Supplier supplier = supplierService.getSupplierByIdWrapper(id);
        if (supplier == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        return Response.ok(supplier).build();
    }

    @GET
    public List<Supplier> SupplierListAll() {
        return supplierService.getAllSuppliersListWrapper();
    }

    @POST
    @Path("/import")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response importSuppliers(List<Supplier> suppliers) {
        try {
            supplierService.importSuppliers(suppliers);
            return Response.status(Response.Status.CREATED)
                    .entity("Fornecedores importados com sucesso: " + suppliers.size())
                    .build();
        } catch (IllegalArgumentException e) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity(e.getMessage())
                    .build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("Erro ao importar fornecedores: " + e.getMessage())
                    .build();
        }
    }

    @POST
    public Response createSupplier(Supplier supplier) {
        supplierService.createSupplierWrapper(supplier);
        return Response.status(Response.Status.CREATED).entity(supplier).build();
    }

    @PUT
    public Response updateSupplier(Supplier newSupplier) {
        Supplier supplier = supplierService.getSupplierByIdWrapper(newSupplier.getId());
        if (supplier == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        supplierService.updateSupplierWrapper(newSupplier);

        return Response.ok(supplier).build();
    }

    @PUT
    @Path("/{id}/desactivate")
    public Response logicalDeleteSupplier(@PathParam("id") Long id) {
        Supplier supplier = supplierService.getSupplierByIdWrapper(id);
        if (supplier == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        supplierService.logicalDeleteSupplierWrapper(id);
        return Response.ok(supplier).build();
    }

    @DELETE
    @Path("/{id}")
    public Response permanentDeleteSupplier(@PathParam("id") Long id) {
        Supplier supplier = supplierService.getSupplierByIdWrapper(id);
        if (supplier == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        supplierService.permanentDeleteSupplierWrapper(id);
        return Response.ok(supplier).build();

    }

}
