import React from 'react';

const Testimonial = () => {
  return (
   <>
    <section className="facilities">
         <h1>Our Reviews</h1>
         <p>Here's what they have to say about their RentoMojo experience.</p>
         <div className="row">
             <div className="facilities-col">
                 <img src="library.png" alt="" />
                 <h3>Kaushal Tiwari</h3>
                 <p>
Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs. </p>

             </div>
             <div className="facilities-col">
                <img src="basketball.png" alt="" />
                <h3>Naveen Kumar</h3>
                <p>
When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :D</p>

            </div>
            <div className="facilities-col">
                <img src="cafeteria.png" alt="" />
                <h3>Anjali Sharma</h3>
                <p> 
I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket.</p>

            </div>
         </div>
     </section>
    <section className="facilities" style={{position:'relative', top:'-110px'}}>
         <div className="row">
             <div className="facilities-col">
                 <img src="library.png" alt="" />
                 <h3>Kaushal Tiwari</h3>
                 <p>
Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs. </p>

             </div>
             <div className="facilities-col">
                <img src="basketball.png" alt="" />
                <h3>Naveen Kumar</h3>
                <p>
When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :D</p>

            </div>
            <div className="facilities-col">
                <img src="cafeteria.png" alt="" />
                <h3>Anjali Sharma</h3>
                <p> 
I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket.</p>

            </div>
         </div>
     </section>
    
    {/* testimonials  */}
    <section className="testimonials">
        <h1>Testimonials</h1>
        <p>  laborum? Excepturi, omnisiusto?</p>

        <div className="row">
            <div className="testimonials-col">
                <img src="user1.jpg" alt=""/>
                <p>Lorem ipsum dignissimos ex, deserunt voluptatibus voluptates distinctio ratione corrupti tenetur nulla sequi, esse quo. Quod quaerat enim mollitia.</p>
                <h3>Christiano Berkley</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
               
            </div>
            <div className="testimonials-col">
               <img src="user2.jpg" alt=""/>
               <p>Lorem  deserunt voluptatibus voluptates distinctio ratione corrupti tenetur nulla sequi, esse quo. Quod quaerat enim mollitia.</p>
               <h3>James Edison</h3>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
                
                <i className="fa fa-star-half-o"></i>
           </div>
            </div>
    </section>
    <section className="testimonials">
       
        <div className="row">
            <div className="testimonials-col">
                <img src="user1.jpg" alt=""/>
                <p>Lorem ipsum dignissimos ex, deserunt voluptatibus voluptates distinctio ratione corrupti tenetur nulla sequi, esse quo. Quod quaerat enim mollitia.</p>
                <h3>Christiano Berkley</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
               
            </div>
            <div className="testimonials-col">
               <img src="user2.jpg" alt=""/>
               <p>Lorem  deserunt voluptatibus voluptates distinctio ratione corrupti tenetur nulla sequi, esse quo. Quod quaerat enim mollitia.</p>
               <h3>James Edison</h3>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
               <i className="fa fa-star"></i>
                
                <i className="fa fa-star-half-o"></i>
           </div>
            </div>
    </section>
    </>
     

  )
}

export default Testimonial
