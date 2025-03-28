package neostore.EmailTest;

import neostore.domain.vo.Email;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class EmailTest {

    @Test
    void testValidEmail() {
        Email email = new Email("max.silva@company.com.br");
        assertEquals("max.silva@company.com.br", email.getValue());
    }

    @Test
    void testValidEmailWithSpaces() {
        Email email = new Email("  user@domain.com  ");
        assertEquals("user@domain.com", email.getValue(), "Deve remover espaços em branco");
    }

    @Test
    void testNullEmail() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> new Email(null));
        assertEquals("Invalid Email: null", exception.getMessage());
    }

    @Test
    void testInvalidEmailNoAtSymbol() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> new Email("user.domain.com"));
        assertEquals("Invalid Email: user.domain.com", exception.getMessage());
    }

    @Test
    void testInvalidEmailNoDomain() {
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> new Email("user@"));
        assertEquals("Invalid Email: user@", exception.getMessage());
    }
}