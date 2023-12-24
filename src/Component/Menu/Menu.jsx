import React from 'react'
import Meals from '../Meals/Meals';
import Category from '../Category/Category';
import Ingredients from '../Ingredients/Ingredients';

export default function Menu({ num, numC }) {






    return <>
        <div className='container menu'>
            <h5>Food Menu</h5>
            <h2>Most Popular Items</h2>
            <div className='row g-3 mt-3'>

                <div className="nav d-flex justify-content-center align-items-center  " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><i className="fa-solid fa-utensils"></i> All Meals</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"> <i className="fa-solid fa-burger"></i>Categories</button>
                    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i className="fa-solid fa-fish-fins"></i>Ingredients</button>
                </div>

                <div className="tab-content" id="v-pills-tabContent">

                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <Meals num={num} />
                    </div>

                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <Category numC={numC} />
                    </div>

                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <Ingredients />
                    </div>

                </div>
            </div>
        </div>


    </>
}
