import React from 'react';

const Testimonial = () => {
  return (
   <>
    <section className="facilities">
         <h1>Our Reviews</h1>
         <p>Here's what they have to say about their RentoMojo experience.</p>
         <div className="row">
             <div className="facilities-col">
                 <img src="/assets/kushal-tiwari.webp" alt="" style={{height:'10vh', width:'10vh'}}/>
                 <h3>Kaushal Tiwari</h3>
                 <p>
Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs. </p>

             </div>
             <div className="facilities-col">
             <img src="/assets/navin-kumar.jpg" alt="" style={{height:'10vh', width:'10vh'}} />
                <h3>Naveen Kumar</h3>
                <p>
When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :D</p>

            </div>
            <div className="facilities-col">
            <img src="/assets/anjali-sharma.jpg" alt="" style={{height:'10vh', width:'10vh'}} />
                <h3>Anjali Sharma</h3>
                <p> 
I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket.</p>

            </div>
         </div>
     </section>
    </>
     

  )
}

export default Testimonial
