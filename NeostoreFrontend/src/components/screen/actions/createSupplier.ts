import axios from "axios";
import { Supplier } from "../../../type/supplier";


export default async function createSupplier(supplier: Supplier): Promise<any> {
    const VITE_API_URL_SUPPLIERS: string | undefined = import.meta.env.VITE_API_URL_SUPPLIERS;

    if (VITE_API_URL_SUPPLIERS) {
        try {
            const response = await axios.post(VITE_API_URL_SUPPLIERS, supplier, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error creating supplier:", error);
            return null;
        }
    } else {
        return null;
    }
}
