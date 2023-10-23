import axios from "axios";

export async function getAllType() {
    try {
        const result = await axios.get("http://localhost:8080/api/type/");
        return result.data;
    } catch (e) {
        console.log(e);
    }
}