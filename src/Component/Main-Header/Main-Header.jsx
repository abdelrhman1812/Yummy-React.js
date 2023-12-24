import React from 'react'
import { Link } from 'react-router-dom'
export default function MainHeader({ page }) {
    return <>


        <div className=' main-header'>

            <div className="container">

                <h1>{page}</h1>
                <ul>
                    <li className='active'><Link>Home</Link></li>
                    <li> / {page}</li>
                </ul>
            </div>
        </div>


    </>
}
