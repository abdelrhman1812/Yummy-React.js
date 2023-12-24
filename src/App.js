import React from 'react'
import Home from './Component/Home/Home'
import { RouterProvider, redirect, createHashRouter } from 'react-router-dom'
import MealDetails from './Component/Meal-Details/Meal-Details'
import Layout from './Component/Layout/Layout'
import CategoryMeal from './Component/Category-Meal/Category-Meal'
import { QueryClient, QueryClientProvider } from 'react-query'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import FoodMenu from './Component/Food-Menu/Food-Menu'
import ContactUs from './Component/Contact-Us/Contact-Us'
import NotFound from './Component/NotFound/NotFound'

export default function App() {
  const queryClient = new QueryClient()

  let routers = createHashRouter([



    {
      path: "", element: (<Layout />),


      children:

        [
          { index: true, loader: () => redirect("home") },
          { path: 'home', element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'services', element: <Services /> },
          { path: 'foodMenu', element: <FoodMenu /> },
          { path: 'contact-us', element: <ContactUs /> },
          { path: 'mealDetails/:id', element: <MealDetails /> },
          { path: 'categoryMeal/:name', element: < CategoryMeal /> },
          { path: '*', element: <NotFound /> },
        ]


    }])


  return <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} >

      </RouterProvider>
    </QueryClientProvider>

  </>
}
