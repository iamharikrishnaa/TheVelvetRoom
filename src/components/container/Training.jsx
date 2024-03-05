import image from "../../assets/image.png";

const Training = () => {
  return (
    <div className="section flex flex-col md:flex-row justify-between" id="Training">
  <div className="flex flex-col justify-center gap-4 md:w-[50%]">
    <div className="font-bold font-space-grotesk text-3xl md:text-4xl">
      Mind, body, soul: <br />
      prioritize self-care.
    </div>
    <p className="text-lg md:text-xl w-full md:w-[580px]">
      Salon and Cosmetology offers services to help you look and feel your
      best. Come in, relax, and let our professionals help you find a color
      and cut that are just right for you. The hair, makeup, skin care,
      nails and so much more is available at our place. And don’t forget
      the spa.
    </p>
    <div className="mt-4">
      <button type="button" className="text-white bg-gold font-space-grotesk rounded-lg text-lg px-4 py-2.5 inline-flex items-center">
        Book Appointment Now
        <svg className="w-4 h-4 ml-2 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1V3.414l-3.293 3.293a1 1 0 11-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 3.414V17a1 1 0 01-1 1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
  {/* <div className="grid gap-4 grid-cols-2 md:grid-cols-1 md:w-[50%]">
    <img src={image} alt="service" className="object-cover w-full h-full md:w-2/3" />
    <img src={image} alt="service" className="object-cover w-full h-full md:w-full" />
    <img src={image} alt="service" className="object-cover w-full h-full md:w-full" />
    <img src={image} alt="service" className="object-cover w-full h-full md:w-2/3" />
    <img src={image} alt="service" className="object-cover w-full h-full md:w-full" />
    <img src={image} alt="service" className="object-cover w-full h-full md:w-full" />
  </div> */}
  <div class="grid grid-cols-2 gap-4 md:grid-cols-2">
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={image}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={image}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={image}
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="https://docs.material-tailwind.com/img/team-3.jpg"
        alt="gallery-photo"
      />
    </div>
  </div>
</div>
</div>



  );
};

export default Training;
