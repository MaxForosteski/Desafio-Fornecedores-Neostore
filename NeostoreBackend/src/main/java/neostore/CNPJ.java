package neostore;

import java.util.Objects;

public class CNPJ {
    private static final int[] PESOS_PRIMEIRO_DIGITO = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    private static final int[] PESOS_SEGUNDO_DIGITO = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

    private final String value;

    public CNPJ(String value) {
        String cleanedValue = cleanInput(value);
        validate(cleanedValue);
        this.value = cleanedValue;
    }

    
    private String cleanInput(String value) {
        if (value == null) {
            throw new IllegalArgumentException("CNPJ não pode ser nulo");
        }
        return value.replaceAll("[^0-9]", "");
    }

    
    private void validate(String cnpj) {
        if (cnpj.length() != 14) {
            throw new IllegalArgumentException("CNPJ deve conter exatamente 14 dígitos: " + cnpj);
        }

       
        if (isAllDigitsEqual(cnpj)) {
            throw new IllegalArgumentException("CNPJ inválido: todos os dígitos são iguais");
        }

        
        int primeiroDigitoCalculado = calcularDigitoVerificador(cnpj, PESOS_PRIMEIRO_DIGITO, 12);
        int segundoDigitoCalculado = calcularDigitoVerificador(cnpj, PESOS_SEGUNDO_DIGITO, 13);

        int primeiroDigitoOriginal = Character.getNumericValue(cnpj.charAt(12));
        int segundoDigitoOriginal = Character.getNumericValue(cnpj.charAt(13));

        if (primeiroDigitoCalculado != primeiroDigitoOriginal || segundoDigitoCalculado != segundoDigitoOriginal) {
            throw new IllegalArgumentException("CNPJ inválido: dígitos verificadores não correspondem: " + cnpj);
        }
    }

    
    private boolean isAllDigitsEqual(String cnpj) {
        char firstChar = cnpj.charAt(0);
        for (int i = 1; i < cnpj.length(); i++) {
            if (cnpj.charAt(i) != firstChar) {
                return false;
            }
        }
        return true;
    }

    
    private int calcularDigitoVerificador(String cnpj, int[] pesos, int length) {
        int soma = 0;
        for (int i = 0; i < length; i++) {
            int digito = Character.getNumericValue(cnpj.charAt(i));
            soma += digito * pesos[i];
        }
        int resto = soma % 11;
        return (resto < 2) ? 0 : 11 - resto;
    }

    
    public String getValue() {
        return value;
    }

    
    public String getFormattedValue() {
        return String.format("%s.%s.%s/%s-%s",
            value.substring(0, 2),
            value.substring(2, 5),
            value.substring(5, 8),
            value.substring(8, 12),
            value.substring(12, 14));
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CNPJ cnpj = (CNPJ) o;
        return value.equals(cnpj.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }

    @Override
    public String toString() {
        return getFormattedValue();
    }
}