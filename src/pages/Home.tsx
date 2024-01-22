import React from 'react'

const Home = () => {

    // const myPhoto = require('../assets/img/myPhoto.jpeg')
  return (

    <section className='homePage'> 

        <div className="mainPart">

            <div className="row">

                <div className="col-12 col-sm-12 col-md-12 col-xl-6">
                    <div className="leftTextBox">

                        <h1 className='jobTitle'>
                            <p>Frontend</p>
                            <p className='ms-5'>Developer .</p>
                        </h1>


                        <p>I like to craft solid and scalable frontend products with great user experiences.</p>


                        <div className="sub-text-box">
                            <div className="text-item">
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum, beatae dolore nam distinctio incidunt repellendus voluptas vero, modi placeat quidem officia, eaque recusandae architecto. Odit at veniam voluptatum praesentium.</span>
                            </div>

                            <div className="text-item">
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum, beatae dolore nam distinctio incidunt repellendus voluptas vero, modi placeat quidem officia, eaque recusandae architecto. Odit at veniam voluptatum praesentium.</span>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="col-12 col-sm-12 col-md-12 col-xl-6">


                    <div className="rigtPart">

                        <div className="imgFrame">

                            <img src="https://github.com/Mahammad-Aslanzade/Portfolio/blob/mahammad/src/assets/img/myPhoto.jpeg?raw=true" alt="" />

                        </div>

                    
                    </div>
                    
                </div>

            </div>

        </div>

    </section>

    
  )
}

export default Home