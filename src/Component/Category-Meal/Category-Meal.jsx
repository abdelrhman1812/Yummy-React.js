import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import MainHeader from '../Main-Header/Main-Header';
import { Helmet } from 'react-helmet'

export default function CategoryMeal() {
    let params = useParams();

    async function getMealsByCategoryName() {
        try {
            let { data } = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`
            );
            return data
        } catch (error) {
            console.log(error);
        }

    }

    let { isLoading, data } = useQuery('MealsByCategory', () =>
        getMealsByCategoryName(params.name)
    );

    return (
        <>


            <Helmet >
                <title>{params.name}</title>
            </Helmet>

            <MainHeader page={params.name} />
            <div className='container menu categoryMeal'>
                <div className='row'>
                    {isLoading ? <Loading /> : null}
                    {data?.meals.map((item) => (
                        <div key={item.idMeal} className='col-6 col-md-4'>
                            <div className='item'>
                                <Link to={`/mealDetails/${item.idMeal}`}>                                <figure>
                                    <img src={item.strMealThumb} className='w-100' alt='' />
                                    <figcaption>{item.strMeal.split(' ').splice(0, 2).join("  ")}</figcaption>
                                </figure>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}