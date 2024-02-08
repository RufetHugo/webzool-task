'use client'
import {useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function sidebarCategories({category}) {
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log(category,' categories');
    },[category]);

    const changeQueryParam = (newQueryParam) => {
        router.push(`/products/${newQueryParam}`);
    };

    return(


        <main>

            <div className="p-4 bg-white">
                <button className="d-md-none bg-transparent border-0 main-color f-15 fw-bold" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"> Filter
                </button>
            </div>

            <div className="navbar-category bg-white">

                <div className="offcanvas offcanvas-bottom d-md-none" tabIndex="-1" id="offcanvasBottom"
                     aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body small">
                        {category ? (
                            category.map((item, index) => (
                                <div key={index} className="px-2 py-3">
                                    <div onClick={() => changeQueryParam(`${item.id}`)} className="category-link d-flex">
                                        <div className="category-icon d-flex justify-content-center mx-3" dangerouslySetInnerHTML={{ __html: item.icon_svg.replace('width="60"', 'width="22"').replace('height="60"', 'height="22"') }}/>
                                        <div>{item.title}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder w-75"></span>
                                <span className="placeholder"></span>
                            </div>
                        ) }
                    </div>
                </div>
                <div className="p-4 d-none d-md-block">
                    {category ? (
                        category.map((item, index) => (
                            <div key={index} className="px-2 py-3">
                                <div onClick={() => changeQueryParam(`${item.id}`)} className="category-link d-flex">
                                    <div className="category-icon d-flex justify-content-center mx-3" dangerouslySetInnerHTML={{ __html: item.icon_svg.replace('width="60"', 'width="22"').replace('height="60"', 'height="22"') }}/>
                                    <div>{item.title}</div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder w-75"></span>
                            <span className="placeholder"></span>
                        </div>
                    ) }
                </div>
            </div>
        </main>
    )
}
