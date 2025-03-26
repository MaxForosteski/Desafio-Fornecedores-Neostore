/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package neostore;

import jakarta.json.bind.adapter.JsonbAdapter;

/**
 *
 * @author max.silva
 */
public class EmailAdapter implements JsonbAdapter<Email, String> {
    @Override
    public String adaptToJson(Email email) throws Exception {
        return email != null ? email.getValue() : null;
    }
    
    @Override
    public Email adaptFromJson(String value) throws Exception {
        return value != null ? new Email(value): null;
    }
}
