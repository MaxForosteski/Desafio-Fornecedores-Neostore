/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore.application;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import neostore.domain.entity.Supplier;
import neostore.domain.repository.SupplierRepository;

/**
 *
 * @author max.silva
 */
@ApplicationScoped
public class SupplierService {

    @Inject
    private SupplierRepository supplierRepository;
    
    
    @Inject
    public void createSupplierWrapper(Supplier supplier) {
            supplier.setIsActive(true);
            supplier.setCreatedOn(ZonedDateTime.now());
            supplierRepository.createSupplier(supplier);
    }

    public Supplier getSupplierByIdWrapper(Long id) {
        return supplierRepository.SupplierById(id);
    }

    public List<Supplier> getAllSuppliersListWrapper() {
        return supplierRepository.ListAllSupplier();
    }

    public void updateSupplierWrapper(Supplier newSupplier) {
        Supplier supplier = supplierRepository.SupplierById(newSupplier.getId());
        if (supplier == null) {
            throw new RuntimeException("Not found supplier");
        }
        supplierRepository.updateSupplier(newSupplier);
    }

    public void logicalDeleteSupplierWrapper(Long id) {
        Supplier supplier = supplierRepository.SupplierById(id);
        if (supplier == null) {
            throw new RuntimeException("Not found supplier");
        }
        supplier.setIsActive(false);
        supplierRepository.updateSupplier(supplier);
    }

    public void permanentDeleteSupplierWrapper(Long id) {
        Supplier supplier = supplierRepository.SupplierById(id);
        if (supplier == null) {
            throw new RuntimeException("Not found supplier");
        }
        supplierRepository.DeleteSupplier(supplier);
    }
    
    @Transactional
    public void importSuppliers(List<Supplier> suppliers) {
        if (suppliers == null || suppliers.isEmpty()) {
            throw new IllegalArgumentException("A lista de fornecedores não pode ser nula ou vazia");
        }

        for (Supplier supplier : suppliers) {
            createSupplierWrapper(supplier);
        }
    }
}
