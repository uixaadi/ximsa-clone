import TestimonialCard from "./TestimonialCard"


const Testimonials = () => {
  const testimonials = Array.from({ length: 17 }, (_, index) => index + 1);
  return (
    <div className='pt-[110px] pb-[90px] overflow-hidden'>
        <div className='max-w-[1200px] mr-auto ml-auto'>
            <div className="w-full pl-2">
                <div className="bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 text-transparent bg-clip-text font-bold text-xl mb-0">Testimonials</div>
                <h2 className="lg:pt-6 text-3xl lg:text-5xl font-bold mb-9">18k+ Clients Reviews</h2>
            </div>
        </div>
        <div className="pt-[40px]">
          <div className="flex marquee">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial} />
            ))}
          </div>
          <div className="flex marquee-reverse">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Testimonials