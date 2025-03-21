/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore.application;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import neostore.domain.Supplier.Supplier;
import neostore.domain.Supplier.SupplierRepository;

/**
 *
 * @author max.silva
 */
@ApplicationScoped
public class SupplierService {
    private final SupplierRepository supplierRepository;
    
    @Inject
    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }
    
    public void createSupplier(Supplier supplier) {
        supplier.setIsActive(true);
        supplier.setCreatedOn(Timestamp.from(Instant.now()));
        supplierRepository.createSupplier(supplier);
    }
    
    public Supplier getSupplierById(Long id) {
        return supplierRepository.SupplierById(id);
    }
    
    public List<Supplier> getAllSuppliersList() {
        return supplierRepository.ListAllSupplier();
    }
    
    public void updateSupplier(Supplier newSupplier) {
        Supplier supplier = supplierRepository.SupplierById(newSupplier.getId());
        if (supplier == null) {
            throw new RuntimeException("Not found supplier");
        }
        supplierRepository.updateSupplier(newSupplier);
    }
    
    public void logicalDeleteSupplier(Long id) {
        Supplier supplier = supplierRepository.SupplierById(id);
        if (supplier == null) {
            throw new RuntimeException("Not found supplier");
        }
        supplier.setIsActive(false);
        supplierRepository.updateSupplier(supplier);
    }
    
    public void permanentDeleteSupplier(Long id){
        Supplier supplier = supplierRepository.SupplierById(id);
        if(supplier == null){
            throw new RuntimeException("Not found supplier");
        }
        supplierRepository.DeleteSupplier(supplier);
    }
}
