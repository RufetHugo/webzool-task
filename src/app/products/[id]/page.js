'use client';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {atCategories} from "@/lib/actions";

export default function Product() {
    const router = useParams()
    const dispatch = useDispatch();
    const [categories, setCategory] = useState(null);

    useEffect(() => {
        getCategories();
        console.log(router, 'slug');
    }, []);


    const getCategories = async () => {
        try {
            const response = await axios.get(`http://64.226.66.94/api/categories/${router.id}`);
            setCategory(response.data);
        } catch (error) {
            console.error('Error!:', error);
        }
    }

    return (
        <main className="w-100">
            <div className="p-3 p-lg-4">
                <div className="row">
                    {categories && categories.products ? (
                        categories.products.map((item, index) => (
                            <div key={index} className="col-12 col-md-4 col-lg-3 col-xl-2 mb-3">
                                <div className="bg-white rounded h-100">
                                    <div className="ratio ratio-1x1">
                                        <img src={`http://64.226.66.94/${item.main_image}`}
                                             className="img-fluid border-0"
                                             alt="..."></img>
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

                                            <button type="button" onClick={() => setBasketValue(item)}
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
                        categories?.products.length === 0 ? (
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
        </main>
    )
}
