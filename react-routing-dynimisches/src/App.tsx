import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetailCar from './pages/detailCar/DetailsCar'
import { useEffect, useState } from 'react'

export interface ICars {
  id:       number;
  carModel: string;
  CarMake:  string;
  CarYear:  number;
}

function App() {
  const [carList, setCarList] = useState<ICars[]>([]);


  useEffect(() => {
    fetch("../public/json/data.json")
      .then(resp => resp.json())
      .then(data => setCarList(data))
  }, [])



  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Home carArray={carList} />} />
      <Route path="cars/:car" element={<DetailCar carArray={carList } />} />
    </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
