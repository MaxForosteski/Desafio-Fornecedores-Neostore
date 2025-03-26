package neostore;

import java.util.Objects;
import java.util.regex.Pattern;

public class Email {

    private static final String EMAIL_REGEX = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$";
    private static final Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_REGEX);

    private final String value;

    public Email(String value) {
        String cleanEmail = value.replaceAll("\\s+", ""); //Limpa todos os espaços em branco
        if (cleanEmail == null) {
            throw new IllegalArgumentException("Email can't be null");
        }
        if (!EMAIL_PATTERN.matcher(cleanEmail).matches()) {
            throw new IllegalArgumentException("Invalid Email:" + value);
        }
        
        this.value = cleanEmail;
    }

    public String getValue() {
        return value;
    }
    
    @Override
    public boolean equals(Object o){
        if(this == o) return true;
        if(o == null || getClass() != o.getClass()) return false;
        Email email = (Email) o;
        return value.equals(email.value);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
    
    @Override
    public String toString(){
        return value;
    }
}
