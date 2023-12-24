import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom';
import Aos from 'aos';
export default function Category({ numC }) {


    const [loading, setLoading] = useState(false)
    const [meal, setMeal] = useState([]);

    async function category() {
        setLoading(true)
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            // console.log(data.categories);
            setLoading(false)
            setMeal(data.categories)
        } catch (error) {
            setLoading(false)

            console.error('Error fetching data:', error);
        }
    }




    useEffect(() => {
        category();
        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });

    }, []);

    return <>


        <div className='container'>
            <div className="row">

                {loading ? <Loading /> : ''}
                {meal?.splice(0, numC).map((item) => <div key={item.idCategory} className='col-6 col-md-4'>
                    <div className="item" data-aos="flip-right" data-aos-duration="1000" >

                        <figure>
                            <Link to={`/categoryMeal/${item.strCategory}`}>
                                <img src={item.strCategoryThumb} className='w-100' alt="" />
                                <figcaption>{item.strCategory.split(' ').splice(0, 2).join("  ")}</figcaption>
                            </Link>
                        </figure>

                    </div>
                </div>
                )}

            </div>
        </div>




    </>
}
