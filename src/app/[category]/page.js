'use client';
import React from "react";
import {useParams} from "next/navigation";
import ProductList from "@/components/products/page";

export default function Product() {
    const params = useParams()
    return (<ProductList endpoint={`categories/${params.category}`}/>)
}
