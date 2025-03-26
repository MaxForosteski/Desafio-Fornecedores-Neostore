import axios from "axios";
import { Supplier } from "../../../type/supplier";


export default async function deleteSupplier(supplier: Supplier): Promise<any> {
    const VITE_API_URL_SUPPLIERS_DELETE: string | undefined = import.meta.env.VITE_API_URL_SUPPLIERS + "/" + supplier.id + "/delete";

    if (VITE_API_URL_SUPPLIERS_DELETE) {
        try {
            const response = await axios.delete(VITE_API_URL_SUPPLIERS_DELETE, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error deleting supplier:", error);
            return null;
        }
    } else {
        return null;
    }
}
