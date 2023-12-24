import React, { useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query'
import MainHeader from '../Main-Header/Main-Header';
import Helmet from 'react-helmet'

export default function MealDetails() {

    let params = useParams()
    const [meal, setMeal] = useState({})
    const [loading, setLoading] = useState(false)            // console.log(data.meals[0])



    async function getMealById() {
        try {
            setLoading(true)

            let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            setLoading(false)

            // console.log(data.meals[0])
            // setMeal(data.meals[0])
            return data.meals[0]
        }
        catch (error) {
            setLoading(false)
            console.log("is error: " + error)
        }


    }

    async function getRecipes() {

        let mealDetails = await getMealById()
        mealDetails.ingredients = []

        const mealDetailsMap = new Map(Object.entries(mealDetails))

        for (let i = 0; i < mealDetailsMap.size; i++) {
            if (mealDetailsMap.get(`strIngredient${i}`)) {
                mealDetails.ingredients.push(`
                ${mealDetailsMap.get(`strMeasure${i}`)}  -
                ${mealDetailsMap.get(`strIngredient${i}`)}
                
                `);
            }

            setMeal(mealDetails)
            // console.log(mealDetails)

        }
        // console.log(mealDetailsMap)

    }


    useQuery('category', getRecipes)



    return <>
        <Helmet >
            <title>{meal.strMeal}</title>
        </Helmet>
        <MainHeader page={meal.strMeal} />

        <div className="container pt-4 meal-details">
            <h1>{meal.strMeal}</h1>
            <div className='row'>
                {loading ? <Loading /> : ""}
                <div className='col-md-4'>
                    <figure>
                        <img src={meal?.strMealThumb} className='w-100' alt={meal?.strMeal} />
                    </figure>
                    <figcaption><h2>{meal?.strMeal}</h2></figcaption>
                    <div className="btns">
                        <button className='source'><Link to={`${meal.strSource}`}>Source</Link></button>
                        <button className='youtube'><Link to={`${meal.strYoutube}`}>Youtube</Link></button>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className='text'>
                        <p>{meal?.strInstructions}</p>
                        <h5 className='d-inline'>Category: <span>{meal?.strCategory}</span></h5>
                        <h5 className='d-inline mx-5'>Area: <span>{meal?.strArea}</span></h5>
                        <div className='recipece'>
                            <h5>Recipes:</h5>
                            <div className='spans' >
                                {meal.ingredients?.map((ingredient, index) =>
                                    <span key={index}>{ingredient} </span>
                                )}


                            </div>
                        </div>

                        {meal.strTags &&
                            <div className='tags'>
                                <h5>Tags:</h5>
                                <div className='spans'>
                                    {meal.strTags?.split(',').map((tag, index) =>
                                        <span key={index}>{tag} </span>
                                    )}


                                </div>
                            </div>

                        }


                    </div>
                </div>
            </div>
        </div>

    </>
}
