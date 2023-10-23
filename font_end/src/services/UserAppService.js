import axios from "axios";

export async function login(userApp) {
        const result = await axios.post("http://localhost:8080/authenticate", userApp);
        return result;
}
