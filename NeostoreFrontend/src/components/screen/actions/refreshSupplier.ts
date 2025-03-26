import axios from "axios";
import { Supplier } from "../../../type/supplier";


export default async function refreshSupplier(): Promise<Supplier[]> {
    const VITE_API_URL_SUPPLIERS_GET_ALL: string | undefined = import.meta.env.VITE_API_URL_SUPPLIERS;

    if (VITE_API_URL_SUPPLIERS_GET_ALL) {
        try {
            const response = await axios.get<Supplier[]>(VITE_API_URL_SUPPLIERS_GET_ALL);
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    } else {
        return [];
    }
}
