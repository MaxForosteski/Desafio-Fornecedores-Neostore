package neostore.CNPJTest;

import neostore.domain.vo.CNPJ;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CNPJTest {

    @Test
    void testValidCNPJWithMask() {
        CNPJ cnpj = new CNPJ("11.444.777/0001-61");
        assertEquals("11444777000161", cnpj.getValue());
        assertEquals("11.444.777/0001-61", cnpj.getFormattedValue());
    }

    @Test
    void testValidCNPJWithoutMask() {
        CNPJ cnpj = new CNPJ("12345678000195");
        assertEquals("12345678000195", cnpj.getValue());
        assertEquals("12.345.678/0001-95", cnpj.getFormattedValue());
    }

    @Test
    void testNullCNPJ() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> new CNPJ(null));
        assertEquals("CNPJ não pode ser nulo", exception.getMessage());
    }

    @Test
    void testCNPJWithInvalidLength() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> new CNPJ("123456789"));
        assertEquals("CNPJ deve conter exatamente 14 dígitos: 123456789", exception.getMessage());
    }

    @Test
    void testCNPJWithAllDigitsEqual() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> new CNPJ("00.000.000/0000-00"));
        assertEquals("CNPJ inválido: todos os dígitos são iguais", exception.getMessage());
    }

    @Test
    void testCNPJWithInvalidCheckDigits() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> new CNPJ("12.345.678/9012-34"));
        assertEquals("CNPJ inválido: dígitos verificadores não correspondem: 12345678901234", exception.getMessage());
    }
}