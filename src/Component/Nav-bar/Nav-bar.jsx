import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
export default function NavBar() {

    let navBar = useRef(null)
    let container = useRef(null)

    /* Change Color Nav-Bar */
    function changeColor() {
        let scroll = window.scrollY;
        if (scroll < 150) {
            navBar.current.style.backgroundColor = "transparent";
            container.current.classList.replace("container-fluid", 'container');

        } else {
            navBar.current.style.backgroundColor = "#0F172B";
            container.current.classList.replace("container", 'container-fluid');
            // container.style.padding = "0 20px";
        }
    }


    function change() {

        navBar.current.style.backgroundColor = "#0F172B";

    }


    /* Change Color Links  */
    function active(e) {
        let links = document.querySelectorAll(".collapse a")
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
            e.target.classList.add("active");
            // console.log(e.target)
        }
    }



    useEffect(() => {

        const handleScroll = () => {
            changeColor();
        };
        window.addEventListener('scroll', handleScroll);
        changeColor();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])




    return <>


        <nav ref={navBar} className="navbar navbar-expand-lg position-fixed w-100 ">
            <div ref={container} className="container con">
                {/* Logo */}
                <div className="logo">
                    <figure>
                        <Link to={'/'}>  <img src={require('../../Assets/images/Logo/Restaurant-yummy-food-logo-design-Graphics-26620420-2-312x208.png')} alt="Yummy" /> </Link>
                        <Link to={'/'}>  <figcaption>Yummy</figcaption></Link>
                    </figure>
                </div>

                <i onClick={change} className="navbar-toggler fa-solid fa-bars-staggered  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></i>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link onClick={(e) => active(e)} className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={(e) => active(e)} className="nav-link" to={'about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={(e) => active(e)} className="nav-link" to={'services'}>Services</Link>
                        </li>
                        <li className="nav-item book">
                            <Link onClick={(e) => active(e)} className="nav-link" to={'foodMenu'}>Food Menu</Link>
                        </li>
                        <li className="nav-item book">
                            <Link onClick={(e) => active(e)} className="nav-link" to={'contact-us'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >

    </>
}



// import React, { useEffect } from 'react';

// export default function NavBar() {
//     function changeColor() {
//         const navbar = document.querySelector(".navbar");
//         const container = document.querySelector('.con');
//         const scroll = window.scrollY;

//         // Check if navbar and container elements are found
//         if (navbar && container) {
//             navbar.style.backgroundColor = scroll < 150 ? "transparent" : "#0F172B";

//             // Use optional chaining to avoid errors if classList is null or undefined
//             container.classList?.replace(
//                 scroll < 150 ? "container-fluid" : "container",
//                 scroll < 150 ? "container" : "container-fluid"
//             );
//         }
//     }


//     useEffect(() => {
//         const handleScroll = () => {
//             changeColor();
//         };

//         window.addEventListener('scroll', handleScroll);
//         changeColor();

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <nav className="navbar navbar-expand-lg position-fixed w-100">
//             <div className="container con">
//                 {/* Logo */}
//                 <div className="logo">
//                     <figure>
//                         <img src={require('../../Assets/images/Logo/Restaurant-yummy-food-logo-design-Graphics-26620420-2-312x208.png')} alt="" />
//                         <figcaption>Yummy</figcaption>
//                     </figure>
//                 </div>

//                 <i className="navbar-toggler fa-solid fa-bars-staggered" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></i>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">
//                                 Home
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">
//                                 Features
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">
//                                 Pricing
//                             </a>
//                         </li>
//                         <li className="nav-item book">
//                             <a className="nav-link" href="#">
//                                 Book A Table
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }
