'use client';
import React, {useEffect, useState} from "react";
import "./styles/globals.scss";
import {Inter} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import TopHeader from '../components/header/TopHeader'
import Footer from '../components/footer/Footer'

import BootstrapClient from "@/components/BootstrapClient";
import SidebarCategories from "@/components/sidebar-categories/page";
import Products from "@/components/products/page";
import {useRouter} from "next/navigation";
import axios from "axios";
import SimpleSlider from "@/components/simpleSlider/page";
import {Provider} from "react-redux";
import store from "../lib/store/store";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({children}) {

    const router = useRouter()
    const [categories, setCategory] = useState(null);

    const changeQueryParam = (newQueryParam) => {
        console.log(newQueryParam, router.pathname, router, 'sd');
        router.push({
            pathname: `${router.pathname}/`,
            query: {filter: newQueryParam},
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 140) {
                document.body.classList.add('header-fixed');
            } else {
                document.body.classList.remove('header-fixed');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const response = await axios.get('http://64.226.66.94/api/categories/');
            setCategory(response.data);
        } catch (error) {
            console.error('Xəta!:', error);
        }
    }

    return (
        <html lang="en">
        <body className={inter.className}>
        <BootstrapClient/>

        <Provider store={store}>
            <TopHeader/>
            <main>

                <section className="main-cover d-flex justify-content-center align-items-center">
                    <div className="row w-100 justify-content-center">
                        <div className="col-12 col-lg-7">

                            <div className="text-center mb-5">
                                <h1 className="fw-bold mb-3">
                                    Groceries Delivered in 90 Minute
                                </h1>

                                <p className="text-muted">
                                    Get your healthy foods & snacks delivered at your doorsteps all day everyday
                                </p>
                            </div>

                            <div className="mx-md-5">
                                <div className="d-flex search input-group bg-white" role="search">
                                    <div className="input-group-text m-1 border-0 main-color f-14 rounded">
                                        Grocery
                                    </div>
                                    <input className="form-control border-0" type="search"
                                           placeholder="Search your products from here" aria-label="Search"></input>
                                    <button
                                        className="btn btn-outline-success input-group-text main-bg text-white border-0"
                                        type="submit">
                                        <div className="d-flex align-items-center px-3">
                                            <span className="mdi mdi-24px mdi-magnify"></span>
                                            <div className={'fw-bold'}>Search</div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="container-fluid py-5 border-bottom bg-white">
                    <div className="row justify-content-center">
                        <div className="col-11">
                            <SimpleSlider/>
                        </div>
                    </div>
                </div>

                <div className="bg-green">
                    <div className="d-md-flex w-100">

                        <SidebarCategories category={categories}/>

                        {children}
                        {/*<Products/>*/}

                    </div>
                </div>

            </main>
        </Provider>

        <Footer/>
        </body>
        </html>
    );
}
