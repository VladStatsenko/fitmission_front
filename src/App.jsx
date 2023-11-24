import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer.jsx'
import Start from './Start'
import Form from './Form'
import ProgressBar from './ProgressBar.jsx'
import Payment from './Payment.jsx'
import Success from './Success'
import CancelSubscription from './CancelSubscription'
import SubCanceled from './SubCanceled'
import PageNotFound from './PageNotFound'
import ErrorPage from './ErrorPage'


function App() {

  const [loadingState, setLoadingState] = useState('form')


  const [form, setForm] = useState({
    sex: null,
    vegetarian: null,
    milk: null,
    activity: null,
    age: {value: '', validity: false},
    height: {value: '', validity: false},
    weight: {value: '', validity: false},
    expectedWeight: {value: '', validity: false},
    email: {value: '', validity: false}
  })
  


  return (
    <>
      <BrowserRouter>
        <div
          className="min-h-[calc(100dvh-76px)] p-6 bg-cover mt-[76px]"
          style={{"background-image": "linear-gradient(rgba(35, 35, 37, 0.95), rgba(35, 35, 37, 0.95)), url(/bg-pattern.jpg)"}}>
          <div className='flex flex-col gap-4 min-h-[calc(100dvh-76px-3rem)]'>

              <Nav />
              <Routes>
                <Route
                  path='/'
                  element={
                    <Start
                      changeLoadingState={() => {
                        setLoadingState('loading')
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      }} />
                  }
                />

                <Route
                  path='/form'
                  element={
                    <Form
                      form={form}
                      changeLoadingState={() => {
                        setLoadingState('loading')
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      }}
                      handleChangeForm={(e) => {
                        let value = e.target.value
                        e.target.name == 'sex' ? setForm({...form, sex: Number(value)}) :
                        e.target.name == 'vegetarian' ? setForm({...form, vegetarian: Number(value)}) :
                        e.target.name == 'milk' ? setForm({...form, milk: Number(value)}) :
                        e.target.name == 'activity' ? setForm({...form, activity: Number(value)}) : ''
                      }}
                      handleChangeData={(e) => {
                        let value = e.target.value
                        let validity = e.target.checkValidity()
                        e.target.id == 'age' ? setForm({...form, age: {value: value, validity: validity}}) :
                        e.target.id == 'height' ? setForm({...form, height: {value: value, validity: validity}}) :
                        e.target.id == 'weight' ? setForm({...form, weight: {value: value, validity: validity}}) :
                        e.target.id == 'expectedWeight' ? setForm({...form, expectedWeight: {value: value, validity: validity}}) : ''
                      }}
                      values={Object.values(form)} />
                  } 
                />

                <Route
                  path='/loading'
                  element={
                    <ProgressBar
                      changeLoadingState={() => {
                        setLoadingState('loaded')
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                      }} />
                  } 
                />

                <Route
                  path='/payment'
                  element={
                    <Payment
                      form={form}
                      handleChange={(e) => {
                        let value = e.target.value
                        let validity = e.target.checkValidity()
                        e.target.id == 'email' ? setForm({...form, email: {value: value, validity: validity}}) : ''
                      }}
                      values={Object.values(form)}
                      />
                    }
                />

                <Route
                  path='/pay'
                  />

                <Route
                  path='/success'
                  element={
                    <Success />
                  }
                  />

                <Route
                  path='/subscription-cancellation'
                  element={
                    <CancelSubscription 
                    form={form}
                    handleChange={(e) => {
                      let value = e.target.value
                      let validity = e.target.checkValidity()
                      e.target.id == 'email' ? setForm({...form, email: {value: value, validity: validity}}) : ''
                    }}
                    values={Object.values(form)}
                    />
                  }
                />

                  <Route
                    path='/subscription-canceled-success'
                    element={
                      <SubCanceled />
                    }
                  />

                  <Route
                    path='*' // for err404
                    element={
                      <PageNotFound />
                    }
                  />
                  
                  <Route
                    path='/error' // for err500, etc.
                    element={
                      <ErrorPage />
                    }
                  />

              </Routes>
              <Footer email={form.email.value} />

          </div>


        </div>
      </BrowserRouter>
    </>
  )
}

export default App