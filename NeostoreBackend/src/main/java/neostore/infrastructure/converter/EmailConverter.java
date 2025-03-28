
package neostore.infrastructure.converter;

import neostore.domain.vo.Email;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

/**
 *
 * @author max.silva
 */
@Converter(autoApply = true)
public class EmailConverter implements AttributeConverter<Email, String>{
    @Override
    public String convertToDatabaseColumn(Email email){
        return email != null ? email.getValue() : null;
    }
    
    @Override
    public Email convertToEntityAttribute(String value){
        return value != null ? new Email(value) : null;
    }
}
