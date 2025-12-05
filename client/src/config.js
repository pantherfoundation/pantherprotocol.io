
let API_URL = ""

if(process.env.NODE_ENV === "production"){
    API_URL = process.env.REACT_APP_PROD_API;
} else {
    API_URL = process.env.REACT_APP_LOCAL_API;
}

export default API_URL