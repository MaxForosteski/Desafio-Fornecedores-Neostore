/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore;

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
@Table(name = "supplier")
public class Supplier {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    
    @Column(name = "name")
    @NotNull(message = "name cannot be null")
    private String name;
    
    @Column(name = "email")
    @Email(message = "Email must be valid")
    @NotNull(message = "Email cannot be null")
    private String email;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "cnpj")
    private String cnpj;
    
    @Column(name = "is_active",nullable = false)
    @NotNull(message = "IsActive cannot be null")
    private boolean isActive;
    
    @Column(name="created_on", nullable = false)
    @NotNull(message = "CreatedOn cannot be null")
    private Timestamp createdOn;
    
    @Column(name="updated_on", nullable = false)
    @NotNull(message = "UpdatedOn cannot be null")
    private Timestamp UpdatedOn;

    public Supplier() {
        
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

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
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
