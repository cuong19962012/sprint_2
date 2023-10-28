import axios from "axios";

export async function login(userApp) {
        const result = await axios.post("http://localhost:8080/authenticate", userApp);
        return result;
}

export async function getUserAppByUsername(username) {
        try {
                const result = await axios.get(`http://localhost:8080/api/user-app?username=${username}`);
                console.log(result);
                return result.data;
        } catch (e) {
                console.log(e);
                return null;
        }
}


export async function upgradeForUserApp(username) {
        try {
                const result = await axios.patch(`http://localhost:8080/api/user-app/upgrade/${username}`);
                return result;
        } catch (e) {
                console.log(e);
                return null;
        }
}

