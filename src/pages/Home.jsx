import Banner from "../components/home/Banner";
import Testimonial from "../components/home/Testimonial";
import TopCows from "../components/home/TopCows";
import TopBlogs from "../components/home/TopBlogs";
import ContactUs from "../components/home/ContactUs";
// import NewsletterSection from "../components/home/NewsLetter";

const Home = () => {
  return (
    <>
      <Banner />
      <TopCows />
      <Testimonial />
      <TopBlogs />
      <ContactUs />
      {/* <NewsletterSection /> */}
    </>
  );
};

export default Home;
