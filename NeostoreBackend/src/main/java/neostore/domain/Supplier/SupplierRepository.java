/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore.domain.Supplier;

import java.util.List;

/**
 *
 * @author max.silva
 */
public interface SupplierRepository {
    Supplier SupplierById(Long id);
    List<Supplier> ListAllSupplier();
    void updateSupplier(Supplier supplier);
    void createSupplier(Supplier supplier);
    void DeleteSupplier(Supplier supplier);
}
