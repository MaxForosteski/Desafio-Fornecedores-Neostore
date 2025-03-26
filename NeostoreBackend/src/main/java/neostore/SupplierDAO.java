/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.PersistenceException;
import jakarta.transaction.Transactional;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import neostore.Supplier;
import neostore.SupplierRepository;

/**
 *
 * @author max.silva
 */

@ApplicationScoped
public class SupplierDAO implements SupplierRepository{

    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("myPU");
    private EntityManager em = emf.createEntityManager();
    
    private static final Logger LOGGER = Logger.getLogger(SupplierDAO.class.getName());

    public SupplierDAO() {
    }
    
    
    
    @Override
    public Supplier SupplierById(Long id){
        try{
            return em.find(Supplier.class, id);
        } catch(PersistenceException e){
            LOGGER.log(Level.SEVERE,"Failed to find Supplier",e);
            throw new RuntimeException("Failed to find Supplier");
        }
    }
    
    @Override
    public List<Supplier> ListAllSupplier(){
        try{
            
            List<Supplier> sup = em.createQuery("SELECT s FROM Supplier s WHERE s.isActive = true", Supplier.class).getResultList();
            System.out.println(sup);
            return sup;
        } catch (PersistenceException e){
            LOGGER.log(Level.SEVERE,"Failed to return the Suppliers list",e);            
            throw new RuntimeException("Failed to return the Suppliers list");
        }
    }
    
    @Override
    @Transactional
    public void createSupplier(Supplier supplier){
        try{
            supplier.setCreatedOn(Timestamp.from(Instant.now()));
            supplier.setIsActive(true);
            em.persist(supplier);
        } catch(PersistenceException e){
            LOGGER.log(Level.SEVERE,"Failed to create Supplier",e);
            throw new RuntimeException("Failed to create Supplier");
        }
    }
    
    @Override
    @Transactional
    public void updateSupplier(Supplier supplier){
        try{
            supplier.setUpdatedOn(Timestamp.from(Instant.now()));
            em.merge(supplier);
        } catch(PersistenceException e){
            LOGGER.log(Level.SEVERE,"Failed to update Supplier",e);
            throw new RuntimeException("Failed to update Supplier");
        }
    }
    
    @Override
    @Transactional    
    public void DeleteSupplier(Supplier supplier){
        try{
            em.remove(supplier);
        } catch(PersistenceException e){
            LOGGER.log(Level.SEVERE,"Failed to delete Supplier",e);
            throw new RuntimeException("Failed to delete Supplier");
        }
    }
}
