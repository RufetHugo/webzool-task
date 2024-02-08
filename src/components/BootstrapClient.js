"use client"
import {useEffect} from "react";

function BootstrapClient(){

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min");
    }, []);

    return null;
}

export default BootstrapClient
