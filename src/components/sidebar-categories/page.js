'use client'
import {useRouter} from "next/navigation";

export default function sidebarCategories({categories}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const changeQueryParam = (categoryId) => router.push(`/${categoryId}`);

    return(
        <main>

            <div className="p-4 bg-white">
                <button className="d-md-none bg-transparent border-0 main-color f-15 fw-bold" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"> Filter
                </button>
            </div>

            <div className="navbar-category bg-white">

                <div className="offcanvas offcanvas-bottom d-md-none top-radius-20" tabIndex="-1" id="offcanvasBottom"
                     aria-labelledby="offcanvasBottomLabel" data-bs-scroll="true">

                    <div className="offcanvas-header">

                        <button type="button" className="btn-close p-0" data-bs-dismiss="offcanvas" aria-label="Close">
                            <span className="mdi mdi-24px mdi-close"></span>
                        </button>
                    </div>

                    <div className=" overflow-auto">
                        {categories ? (
                            categories.map((item, index) => (

                                <div key={index} className="px-2 py-3">
                                    <div onClick={() => changeQueryParam(item.id)} className="category-link d-flex">
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
                    {categories ? (
                        categories.map((item, index) => (
                            <div key={index} className="px-2 py-3">
                                <div onClick={() => changeQueryParam(item.id)} className="category-link d-flex">
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
