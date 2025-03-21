/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore.infrastructure.DAO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.logging.Logger;
import neostore.domain.Supplier.Supplier;
import neostore.domain.Supplier.SupplierRepository;

/**
 *
 * @author max.silva
 */

@ApplicationScoped
public class SupplierDAO implements SupplierRepository{
    
    @Inject
    private EntityManager em;
    
    Logger LOGGER = Logger.getLogger(SupplierDAO.class.getName());
    
    @Override
    @Transactional
    public Supplier SupplierById(Long id){
        return null;
    }
    
    @Override
    public List<Supplier> ListAllSupplier(){
        return null;
    }
    
    @Override
    @Transactional
    public void createSupplier(Supplier supplier){
        
    }
    
    @Override
    @Transactional
    public void updateSupplier(Supplier supplier){
        
    }
    
    @Override
    @Transactional
    public void logicalDeleteSupplier(Long id){
        
    }
    
    @Override
    @Transactional    
    public void permanentDeleteSupplier(Long id){
        
    }
}
