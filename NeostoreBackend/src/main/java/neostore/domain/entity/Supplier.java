/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore.domain.entity;

import neostore.infrastructure.converter.EmailConverter;
import neostore.infrastructure.json.EmailAdapter;
import neostore.domain.vo.Email;
import neostore.infrastructure.json.CNPJAdapter;
import neostore.domain.vo.CNPJ;
import jakarta.json.bind.annotation.JsonbTypeAdapter;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import java.time.ZonedDateTime;
import neostore.infrastructure.converter.CNPJConverter;

/**
 *
 * @author Everto_Clewito_Riber
 */

@Entity
@Table(name = "supplier", schema = "public")
public class Supplier {
    
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    
    @Column(name = "name", nullable = false)
    private String name;
    
    /*@Column(name = "email", nullable = false)
    @Convert(converter = EmailConverter.class)
    @JsonbTypeAdapter(EmailAdapter.class)
    private Email email;*/
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "description")
    private String description;
    
    /*@Column(name = "cnpj")
    @JsonbTypeAdapter(CNPJAdapter.class)
    private CNPJ cnpj;*/
    
    @Column(name = "cnpj")
    private String CNPJ;
    
    @Column(name = "is_active",nullable = false)
    @NotNull(message = "IsActive cannot be null")
    private boolean isActive;
    
    @Column(name="created_on", nullable = false)
    @NotNull(message = "CreatedOn cannot be null")
    private ZonedDateTime createdOn;
    
    @Column(name="updated_on", nullable = true)
    private ZonedDateTime UpdatedOn;

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

    

    /*public Email getEmail() {
    return email;
    }
    public void setEmail(Email email) {
    this.email = email;
    }*/
    

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    
    
    /*public CNPJ getCnpj() {
        return cnpj;
    }

    public void setCnpj(CNPJ cnpj) {
        this.cnpj = cnpj;
    }*/

    public boolean isIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    public ZonedDateTime getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(ZonedDateTime createdOn) {
        this.createdOn = createdOn;
    }

    public ZonedDateTime getUpdatedOn() {
        return UpdatedOn;
    }

    public void setUpdatedOn(ZonedDateTime UpdatedOn) {
        this.UpdatedOn = UpdatedOn;
    }
    
    
}
