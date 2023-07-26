import {API_URL} from "../utils/constants";

export async function getProducts(limit = 1000){
    try{
        const response = await fetch(
            `${API_URL}/api/products?sort=createdAt:DESC&pagination[limit]=${limit}`
        );
        // const response = await fetch(
        //     `${API_URL}/api/products?fields=name&populate=image,category`
        // );
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function getProductsCategory(category){
    try{
        const response = await fetch(
            `${API_URL}/api/products?fields=name&populate=image,category&filters[category][slug][$eq]=${category}`
        );
        const result = await response.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function getProductImages(){
    try{
        const response = await fetch(
            `${API_URL}/api/products?fields=name&populate=image,category`
        );
        const result = await response.json();
        // console.log('api-->', result)
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}