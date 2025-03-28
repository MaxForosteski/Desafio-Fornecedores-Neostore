package neostore.infrastructure.converter;

import neostore.domain.vo.CNPJ;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import java.util.logging.Level;
import java.util.logging.Logger;

@Converter
public class CNPJConverter implements AttributeConverter<CNPJ, String> {
    
    private static final Logger LOGGER = Logger.getLogger("Converter");
    
    @Override
    public String convertToDatabaseColumn(CNPJ cnpj) {
        LOGGER.log(Level.SEVERE,cnpj.getFormattedValue());
        return cnpj != null ? cnpj.getFormattedValue() : null;
    }

    @Override
    public CNPJ convertToEntityAttribute(String value) {
        LOGGER.log(Level.SEVERE,value);
        LOGGER.log(Level.SEVERE,new CNPJ(value).getFormattedValue());
        return value != null ? new CNPJ(value) : null;
    }
}