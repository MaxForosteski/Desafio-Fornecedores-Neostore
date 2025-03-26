package neostore;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class CNPJConverter implements AttributeConverter<CNPJ, String> {
    @Override
    public String convertToDatabaseColumn(CNPJ cnpj) {
        return cnpj != null ? cnpj.getValue() : null;
    }

    @Override
    public CNPJ convertToEntityAttribute(String value) {
        return value != null ? new CNPJ(value) : null;
    }
}