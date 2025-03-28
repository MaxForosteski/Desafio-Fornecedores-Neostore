package neostore.infrastructure.json;

import neostore.domain.vo.CNPJ;
import jakarta.json.bind.adapter.JsonbAdapter;
import java.util.logging.Level;
import java.util.logging.Logger;

public class CNPJAdapter implements JsonbAdapter<CNPJ, String> {
    
    private static final Logger LOGGER = Logger.getLogger("Adapter");
    
    @Override
    public String adaptToJson(CNPJ cnpj) throws Exception {
        LOGGER.log(Level.SEVERE,cnpj.getFormattedValue());
        return cnpj != null ? cnpj.getFormattedValue(): null;
    }

    @Override
    public CNPJ adaptFromJson(String value) throws Exception {
        LOGGER.log(Level.SEVERE,value);
        LOGGER.log(Level.SEVERE,new CNPJ(value).getFormattedValue());
        return value != null ? new CNPJ(value) : null;
        
    }
}