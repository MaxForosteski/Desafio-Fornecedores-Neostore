package neostore.infrastructure.database;

import neostore.domain.entity.Supplier;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.PersistenceException;
import jakarta.transaction.Transactional;
import java.sql.Timestamp;
import java.time.Instant;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import neostore.domain.repository.SupplierRepository;

@RequestScoped
public class SupplierDAO implements SupplierRepository {

    private static final Logger LOGGER = Logger.getLogger(SupplierDAO.class.getName());

    @PersistenceContext(unitName = "myPU")
    private EntityManager em;

    public SupplierDAO() {
    }

    @Override
    public Supplier SupplierById(Long id) {
        try {
            return em.find(Supplier.class, id);
        } catch (PersistenceException e) {
            LOGGER.log(Level.SEVERE, "Failed to find Supplier", e);
            throw new RuntimeException("Failed to find Supplier");
        }
    }

    @Override
    @Transactional
    public List<Supplier> ListAllSupplier() {
        try {
            List<Supplier> result = em.createQuery("SELECT s FROM Supplier s WHERE s.isActive = true", Supplier.class)
                    .getResultList();
            return result;
        } catch (PersistenceException e) {
            LOGGER.log(Level.SEVERE, "Failed to return the Suppliers list", e);
            e.printStackTrace();
            throw new RuntimeException("Failed to return the Suppliers list", e);
        }
    }

    @Override
    @Transactional
    public void createSupplier(Supplier supplier) {
        try {
            supplier.setCreatedOn(ZonedDateTime.now());
            supplier.setIsActive(true);
            em.persist(supplier);
        } catch (PersistenceException e) {
            LOGGER.log(Level.SEVERE, "Failed to create Supplier", e);
            throw new RuntimeException("Failed to create Supplier");
        }
    }

    @Override
    @Transactional
    public void updateSupplier(Supplier supplier) {
        try {
            supplier.setUpdatedOn(ZonedDateTime.now());
            em.merge(supplier);
        } catch (PersistenceException e) {
            LOGGER.log(Level.SEVERE, "Failed to update Supplier", e);
            throw new RuntimeException("Failed to update Supplier");
        }
    }

    @Override
    @Transactional
    public void DeleteSupplier(Supplier supplier) {
        try {
            em.remove(em.contains(supplier) ? supplier : em.merge(supplier));
        } catch (PersistenceException e) {
            LOGGER.log(Level.SEVERE, "Failed to delete Supplier", e);
            throw new RuntimeException("Failed to delete Supplier");
        }
    }
}
