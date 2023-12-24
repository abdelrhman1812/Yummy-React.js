import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom'
import Aos from 'aos'
export default function Meals({ num }) {

    const [loading, setLoading] = useState(false)
    const [meal, setMeal] = useState([])
    async function getMeal() {
        setLoading(true)
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
            // console.log(data.meals);
            setLoading(false)
            setMeal(data.meals)
        } catch (error) {
            setLoading(false)

            console.error('Error fetching data:', error);
        }
    }



    useEffect(() => {
        getMeal();
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
                {meal?.splice(0, num).map((item) => <div key={item.idMeal} className='col-6 col-md-4' >
                    <div className="item " data-aos="fade-up" data-aos-duration="1000" >
                        <Link to={`/mealDetails/${item.idMeal}`}>
                            <figure>

                                <img src={item.strMealThumb} className='w-100' alt="" />
                                <figcaption>{item.strMeal.split(' ').splice(0, 2).join("  ")}</figcaption>

                            </figure>
                        </Link>
                    </div>
                </div>
                )}
            </div>
        </div>


    </>
}
