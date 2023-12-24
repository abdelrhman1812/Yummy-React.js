import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Aos from 'aos';

export default function Ingredients() {
    const [loading, setLoading] = useState(false);
    const [meal, setMeal] = useState([]);

    async function ingredients() {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
            setLoading(false);
            // console.log(data)
            setMeal(data.meals);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        ingredients();
        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, []);

    return (
        <div className='container'>
            <div className="row">
                {loading ? <Loading /> : ''}
                {meal?.slice(0, 6).map((item, i) => (
                    <div key={i} className='col-6 col-md-4'>
                        <div className="item" data-aos="fade-up" data-aos-duration="1000">

                            <figure>
                                <img src={require(`../../Assets/images/Ingradients/${i + 1}.jpg`)} className='w-100' alt={item.strIngredient} />
                                <figcaption>{item.strIngredient.split(' ').splice(0, 2).join("  ")}</figcaption>

                            </figure>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
