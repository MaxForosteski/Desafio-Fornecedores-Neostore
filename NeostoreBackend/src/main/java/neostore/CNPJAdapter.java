package neostore;

import jakarta.json.bind.adapter.JsonbAdapter;

public class CNPJAdapter implements JsonbAdapter<CNPJ, String> {
    @Override
    public String adaptToJson(CNPJ cnpj) throws Exception {
        return cnpj != null ? cnpj.getValue() : null;
    }

    @Override
    public CNPJ adaptFromJson(String value) throws Exception {
        return value != null ? new CNPJ(value) : null;
    }
}