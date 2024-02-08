'use client';
import axios from "axios";
import {useState} from "react";
import {useParams} from "next/navigation";

export default function Product() {
    const router = useParams()
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const {data} = await axios.get(`http://64.226.66.94/api/categories/${router.id}`);
            console.log(data)
            // products = data.products
        } catch (error) {
            console.error('Error!:', error);
        }
    }

    return (
        'aaaaa'
    )
}
