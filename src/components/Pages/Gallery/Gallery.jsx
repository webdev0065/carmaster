import React from 'react';
import service1 from "../../../Assest/clientimage/service1.JPG";
import service2 from "../../../Assest/clientimage/service2.JPG";
import car1 from "../../../Assest/interior.jpg";
import car2 from "../../../Assest/1st.jpg";
import Header from '../../LayOut/Header/Header';
import Footer from '../../LayOut/Footer/Footer';

const Gallery = () => {
  // Array of car image URLs
  const carImages = [service1, service2, car1, car2 /* Add more image URLs here... */];

  // Extracting only the first two images
  const firstTwoImages = carImages.slice(0, 2);

  return (
    <div>
      <Header />
     <section className='gallery-page'>
         <div className='container-fluid'>
             <h3 className='gallery-heading text-center'>CARS WE HAVE RECENTLY DONE</h3>
              <div className='row'>
                  <div className='col-lg-6 col-md-12'>             
                      <div className='gallery-image-flex'>
                          {/* Use map function to render images */}
                          {firstTwoImages.map((car, index) => (
                          <img key={index} src={car} alt={`Car ${index + 1}`}/>
                        ))}
                      </div>

                      <div className='gallery-image-flex'>
                          {/* Use map function to render images */}
                          {firstTwoImages.map((car, index) => (
                          <img key={index} src={car} alt={`Car ${index + 1}`}/>
                        ))}
                      </div>
                  </div>
              </div>
         </div>
     </section>
      <Footer />
    </div>
  );
}

export default Gallery;
