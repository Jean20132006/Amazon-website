/////////////////////////////////// BACKEND ADDRESS ///////////////////////////////////
/**
 * @brief Address of the backend (Node/Express API) used by every fetch on the site
 * @note  When the site is opened on this computer (Live Server, localhost or the file itself),
 *        it uses the backend running locally on port 4000.
 *        Everywhere else (GitHub Pages), it uses the deployed backend:
 *        replace DEPLOYED_API_URL with its HTTPS address once it is online
 *        (no "/" at the end, e.g. "https://amazon-backend.onrender.com").
 */

const LOCAL_API_URL = "http://localhost:4000";
/*const DEPLOYED_API_URL = "https://YOUR-BACKEND-URL";*/
const DEPLOYED_API_URL = "https://amazon-website-o116.onrender.com";


const isLocalSite =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.protocol === "file:";

const API_BASE_URL = isLocalSite ? LOCAL_API_URL : DEPLOYED_API_URL;

/////////////////////////////////////////////////////////////////////////////////////////
