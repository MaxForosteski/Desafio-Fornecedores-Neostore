export interface Supplier {
    id: number;            
    name: string;          
    email: string;         
    description?: string;  
    cnpj: string;          
    isActive?: boolean;    
    createdOn: string;     
    updateOn?: string;     
  }