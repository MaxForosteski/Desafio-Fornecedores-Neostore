/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore.domain.Supplier;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import java.sql.Timestamp;
import neostore.domain.VO.CNPJ;

/**
 *
 * @author Everto_Clewito_Riber
 */

@Entity
@Table(name = "Supplier")
public class Supplier {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private Long id;
    
    @Column(name = "Name", nullable = false, length = 100)
    @NotNull(message = "name cannot be null")
    private String name;
    
    @Column(name = "Email", nullable = false, length = 100)
    @Email(message = "Email must be valid")
    @NotNull(message = "Email cannot be null")
    private String email;
    
    @Column(name = "Description", nullable = true, length = 500)
    private String description;
    
    @Column(name = "CNPJ", nullable = false, length = 17)
    private CNPJ cnpj;
    
    @Column(name = "IsActive",nullable = false)
    @NotNull(message = "IsActive cannot be null")
    private boolean isActive;
    
    @Column(name="CreatedOn", nullable = false)
    @NotNull(message = "CreatedOn cannot be null")
    private Timestamp createdOn;
    
    @Column(name="UpdatedOn", nullable = false)
    @NotNull(message = "UpdatedOn cannot be null")
    private Timestamp UpdatedOn;

    public Supplier(Long id, String name, String email, String description, CNPJ cnpj, boolean isActive, Timestamp createdOn, Timestamp UpdatedOn) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.description = description;
        this.cnpj = cnpj;
        this.isActive = isActive;
        this.createdOn = createdOn;
        this.UpdatedOn = UpdatedOn;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public CNPJ getCnpj() {
        return cnpj;
    }

    public void setCnpj(CNPJ cnpj) {
        this.cnpj = cnpj;
    }

    public boolean isIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

    public Timestamp getUpdatedOn() {
        return UpdatedOn;
    }

    public void setUpdatedOn(Timestamp UpdatedOn) {
        this.UpdatedOn = UpdatedOn;
    }
    
    
    
    
    
    
}
