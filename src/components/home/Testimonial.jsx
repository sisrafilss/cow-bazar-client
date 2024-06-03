/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: "t1",
    message: "The quality of cows from this company is outstanding. Highly recommend!",
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1603415526960-f8f810a49eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fG1hbnxlbnwwfHx8fDE2NTk5ODUzNDQ&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "t2",
    message: "Professional service and the cows are of superb quality.",
    name: "Jane Smith",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHdvbWFufGVufDB8fHx8MTY1OTk4NTM4NQ&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "t3",
    message: "Exceptional cows and fantastic customer service.",
    name: "Michael Johnson",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1hbnxlbnwwfHx8fDE2NTk5ODU0MjA&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "t4",
    message: "Great experience and top-quality cows.",
    name: "Emily Davis",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHdvbWFufGVufDB8fHx8MTY1OTk4NTQyNQ&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: "t5",
    message: "Very happy with the cows and the service provided.",
    name: "Robert Brown",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIxfG1hbnxlbnwwfHx8fDE2NTk5ODU0MzI&ixlib=rb-1.2.1&q=80&w=400",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md text-left mx-2">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-24 h-24 rounded-full mx-auto mb-4"
    />
    <p className="italic mb-4">"{testimonial.message}"</p>
    <p className="font-bold text-gray-800">- {testimonial.name}</p>
  </div>
);

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-2`}
      style={{
        ...style,
        display: "block",
        background: "#333",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-2`}
      style={{
        ...style,
        display: "block",
        background: "#333",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="text-center py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold mb-4">What our clients say</h2>
      <p className="text-lg text-gray-600 mb-12">
        Hear from our satisfied customers
      </p>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
