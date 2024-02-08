'use client'
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import axios from "axios";

export default function ProductList({endpoint}) {
    const pathname = usePathname();

    const baseUrl = 'http://64.226.66.94'

    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        try {
            const {data} = await axios.get(`${baseUrl}/api/${endpoint}`);
            setProducts(data.products);
        } catch (error) {
            console.error('Error!:', error);
        }
    }

    const getDeatils = async () => {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
        myModal.show()
    }

    return (
        <div>
            <div className="row">
                {products ? (
                    products.map((item, index) => (
                        <div key={index} className="col-12 col-md-4 col-lg-3 mb-3">
                            <div className="bg-white rounded h-100">

                                <div className="ratio ratio-1x1">
                                    <img src={`${pathname !== '/' ? baseUrl : ''}${item.main_image}`} alt={item.title}
                                         className="img-fluid border-0"/>
                                </div>

                                <div className="p-4">

                                    <div className="fw-bold f-14 mb-1">{item.title}</div>

                                    <p className="f-12 text-muetd">{item.amount_by_unit} {item.unit}</p>

                                    <div className="d-flex justify-content-between align-items-center">

                                        <div>
                                            <del className="f-12 text-warning fst-italic">
                                                ${item.price}
                                            </del>
                                            <div className="main-color fw-bold f-15">
                                                ${item.price}
                                            </div>
                                        </div>

                                        <button type="button"
                                                className="btn btn-outline-success rounded-pill border-color-muted px-4">
                                            <span className="mdi mdi-basket"></span> <span
                                            className="f-13">Cart</span></button>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                ) : (
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="card" aria-hidden="true">

                            <img src="/" className="card-img-top" alt="..."></img>

                            <div className="card-body">

                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>

                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>

                                <button type="button"
                                        className="btn btn-success disabled placeholder rounded-pill border-color-muted px-4 ms-auto"
                                        aria-disabled="true">
                                </button>

                            </div>
                        </div>
                    </div>
                )}
                {
                    products?.length === 0 ? (
                        <div className="col-12">
                            <h3 className="text-center p-3 text-info">
                                No product!
                            </h3>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
}
