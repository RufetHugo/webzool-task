import Image from 'next/legacy/image'
import pickBazar from '../../image/logo/logo.svg'
import usFlag from '../../image/flag/united-statess.png'
import germanFlag from '../../image/flag/germany.png'
import azFlag from '../../image/flag/azerbaijan.png'
import {atCategories} from "@/lib/actions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export default function topHeader() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    //   const category = useSelector(state => state.categories);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const category = useSelector(state => state.categories);
    const [categories, setCategory] = useState([
        {
            name: 'Grocery',
            icon: 'mdi mdi-food-apple-outline',
            id: 1
        },
        {
            name: 'Grocery Two',
            icon: 'mdi mdi-food-apple-outline',
            id: 2
        },
        {
            name: 'Bakery',
            icon: 'mdi mdi-baguette',
            id: 3
        },
        {
            name: 'Makeup',
            icon: 'mdi mdi mdi-bag-suitcase-outline',
            id: 4
        },
        {
            name: 'Bags',
            icon: 'mdi mdi-coffee-maker-check-outline',
            id: 5
        },
    ]);

    const setBasketValue = async (param) => {
      //  dispatch(atCategories({data: param}));
    }

    return (
        <main>
            <header className="navbar main-navbar navbar-expand-lg bg-body-tertiary">
                <nav className="container-fluid px-4">

                        {/* <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <div className="navbar-toggler-icon">
                        </div>
                    </button>*/}

                        <button className="navbar-toggler me-4" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <div className="navbar-toggler-icon">
                            </div>
                        </button>

                        <div className="min-width-max-content">
                            <Image src={pickBazar} alt="fd" width={110} height={18}/>
                        </div>


                        <div className="btn-group ms-md-5 header-category ms-auto">
                            <button type="button" className="btn dropdown-toggle main-color px-3 fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <span className="mdi mdi-food-apple-outline"></span> Grocery
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end py-3 px-0">
                                {categories.map((item, index) => (
                                    <li type="button" key={index}>
                                        <button onClick={() => setBasketValue(`${item}`)}
                                                className="dropdown-item" type="button">
                                            <span className={item.icon}></span>
                                            <span className="ms-1">{item.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-100 ms-4 d-none topSearch">
                            <div className="d-flex input-group bg-f7 rounded" role="search">
                                <div className="input-group-text m-1 border-0 f-14">
                                    <span className="mdi mdi-24px mdi-magnify"></span>
                                </div>
                                <input className="form-control border-0 bg-f7" type="search"
                                       placeholder="Search your products from here" aria-label="Search"></input>
                            </div>
                        </div>

                        <div className="ms-auto">
                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1"
                                 id="offcanvasWithBothOptions"
                                 aria-labelledby="offcanvasWithBothOptionsLabel">
                                <div className="offcanvas-body navbar-collapse p-0">
                                    <button className="navbar-toggler m-3 border-0" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasWithBothOptions"
                                            aria-controls="offcanvasWithBothOptions">
                                        <span className="mdi mdi-close"></span>
                                    </button>
                                    <div className="bg-gainsboro py-5 text-center">
                                        <button type="button"
                                                className="btn main-bg text-white fw-medium ms-3 d-lg-none">Join
                                            In
                                        </button>
                                    </div>
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 min-width-max-content">
                                        <li className="nav-item mx-3">
                                            <a className="nav-link">Offer</a>
                                        </li>

                                        <li className="nav-item mx-3">
                                            <a className="nav-link"> <span className="mdi mdi-information"></span> Need Help</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/*

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <button className="navbar-toggler m-3 border-0" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="mdi mdi-close"></span>
                            </button>
                        <div className="bg-gainsboro py-5 text-center">
                            <button type="button" className="btn main-bg text-white fw-medium ms-3 d-md-none">Join In</button>
                        </div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <a className="nav-link">Offer</a>
                            </li>

                            <li className="nav-item mx-3">
                                <a className="nav-link"> <span className="mdi mdi-information"></span> Need Help</a>
                            </li>
                        </ul>
                    </div>*/}


                        <div className="btn-group ms-3 ms-md-5 language-category">
                            <button type="button" className="btn dropdown-toggle main-color px-3 fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <div className="d-flex justify-content-center min-width-max-content">
                                    <Image src={usFlag} alt="fd" width={22} height={22}/>
                                    <div className={'ms-2 d-none d-lg-block'}>English</div>
                                </div>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end py-3 px-0">
                                <li>
                                    <button className="dropdown-item" type="button">
                                        <div className={'d-flex justify-content-left'}>
                                            <Image src={azFlag} alt="fd" width={22} height={22}/>
                                            <div className={'ms-2'}>Azərbaycan</div>
                                        </div>
                                    </button>
                                </li>
                                <div className={'border-bottom'}></div>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        <div className={'d-flex justify-content-left'}>
                                            <Image src={germanFlag} alt="fd"
                                                   width={22} height={22}/>
                                            <div className={'ms-2'}>Germany</div>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <button type="button" className="btn main-bg text-white fw-medium ms-3 d-none d-md-block">Join
                        </button>
                    </nav>
            </header>


            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both
                scrolling & backdrop
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions"
                 aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </main>
    )
}
