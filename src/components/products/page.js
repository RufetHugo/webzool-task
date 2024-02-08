'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation'


export default function Index({props}) {
    const router = useRouter();

    const data = async () => {
        try {
            const response = await axios.get('http://64.226.66.94/api/categories/');
            setCategory(response.data);
        } catch (error) {
            console.error('Xəta!:', error);
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3 mb-3">
                    <div className="bg-white">
                        sdf {router.query}
                        {/* <img src="" className="rounded float-start" alt="...">*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
