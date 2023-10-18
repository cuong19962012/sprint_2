import axios from "axios";

export async function getListAuthorBySearch(searchKeyWord) { 
    try {
        const result = await axios.get(`http://localhost:8080/api/author?searchKeyWord=${searchKeyWord}`);
        return result.data;
} catch (e) {
        console.log(e);
}
}