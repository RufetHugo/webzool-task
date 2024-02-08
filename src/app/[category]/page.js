'use client';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, usePathname, useRouter} from "next/navigation";
import ProductList from "@/components/products/page";

export default function Product() {
    const router = useParams()
    const [products, getProducts] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const {data} = await axios.get(`http://64.226.66.94/api/categories/${router.id}`);
            console.log(data)
            getProducts(data);
        } catch (error) {
            console.error('Error!:', error);
        }
    }

    return (
        <main className="w-100">
            <div className="p-3 p-lg-4">
                <ProductList products={products}/>
            </div>
        </main>
    )
}
