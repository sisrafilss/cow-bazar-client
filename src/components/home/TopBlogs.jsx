/* eslint-disable react/prop-types */
// import { useEffect } from "react";
// import axios from "axios";
import BlogCard from "../BlogCard";

const blogs = [
  {
    id: "1",
    title: "Choosing the Right Cow Breed for Your Farm",
    date: "May 5, 2024",
    excerpt:
      "Learn how to select the best cow breed for your farm based on your specific needs and preferences...",
    imageURL: "https://i.ibb.co/8zQVt3H/cow-blog-1.jpg",
    longDescription: [
      "Selecting the right cow breed for your farm is crucial for maximizing productivity and meeting your specific farming goals. Different cow breeds offer unique benefits and challenges, and understanding these can help you make an informed decision.",
      "First, consider the primary purpose of your farm. Are you focusing on dairy production, beef production, or both? Dairy breeds such as Holstein and Jersey are known for their high milk yield, while beef breeds like Angus and Hereford are prized for their meat quality. Dual-purpose breeds like the Simmental can offer a balance of both milk and meat production.",
      "Climate and environmental conditions also play a significant role in breed selection. Some breeds are better suited to specific climates and can thrive with minimal intervention. For instance, Brahman cows are well adapted to hot, humid conditions, making them ideal for tropical climates.",
      "Additionally, consider the resources available on your farm, including feed, housing, and labor. Some breeds require more intensive management and resources, while others are more resilient and easier to care for. By carefully evaluating these factors, you can choose a cow breed that aligns with your farm’s capabilities and goals.",
    ],
  },
  {
    id: "2",
    title: "Benefits of Raising Dairy Cows",
    date: "April 20, 2024",
    excerpt:
      "Explore the numerous advantages of raising dairy cows on your farm for a sustainable and profitable future...",
    imageURL: "https://i.ibb.co/8zQVt3H/cow-blog-1.jpg",
    longDescription: [
      "Raising dairy cows can provide a sustainable and profitable enterprise for farmers. One of the most significant benefits is the continuous production of milk, which is a staple in human diets and has a steady market demand.",
      "Dairy farming allows for the production of various dairy products such as cheese, butter, yogurt, and cream, which can diversify income streams and increase profitability. Additionally, dairy cows can contribute to the farm's nutrient cycle. Manure from dairy cows is an excellent fertilizer that can improve soil health and crop yields.",
      "Raising dairy cows also offers the opportunity to engage in value-added activities. For instance, producing and selling organic milk or artisanal cheese can attract niche markets willing to pay a premium for high-quality, locally produced goods.",
      "Moreover, dairy farming fosters a connection with the community. Many consumers value knowing the source of their food and appreciate supporting local farms. Hosting farm tours and educational programs can further enhance community engagement and create additional revenue streams.",
    ],
  },
  {
    id: "3",
    title: "Top Features to Look for in a Healthy Cow",
    date: "March 30, 2024",
    excerpt:
      "Understand the key features to consider when purchasing a cow to ensure maximum health and productivity...",
    imageURL: "https://i.ibb.co/8zQVt3H/cow-blog-1.jpg",
    longDescription: [
      "When purchasing a cow, it’s essential to look for specific features that indicate good health and potential for high productivity. A healthy cow will not only yield better milk or meat but will also have a longer, more productive life.",
      "Firstly, examine the cow’s physical appearance. A healthy cow will have a shiny, smooth coat, clear eyes, and no visible signs of injury or disease. The body condition should be appropriate for the breed and age, with no signs of excessive fat or thinness.",
      "Next, consider the cow’s behavior. Healthy cows are alert and active, with good appetite and regular rumination. They should move easily without any signs of lameness or discomfort.",
      "Reproductive health is another crucial factor. Check for a history of regular calving intervals and absence of reproductive issues. This is particularly important for dairy cows, where regular calving is necessary for sustained milk production.",
      "Finally, request veterinary records to ensure the cow is up-to-date with vaccinations and has no history of chronic illnesses. Investing in a health check by a veterinarian before purchase can prevent future health problems and ensure a good return on investment.",
    ],
  },
  {
    id: "4",
    title: "Essential Maintenance Tips for Your Dairy Farm",
    date: "February 15, 2024",
    excerpt:
      "Keep your dairy farm in top condition with these essential maintenance tips and practices...",
    imageURL: "https://i.ibb.co/8zQVt3H/cow-blog-1.jpg",
    longDescription: [
      "Maintaining a dairy farm involves several crucial practices to ensure the health of your herd and the efficiency of your operations. Regular maintenance not only improves productivity but also extends the lifespan of your equipment and facilities.",
      "First and foremost, cleanliness is paramount. Regularly clean barns, milking equipment, and feeding areas to prevent the buildup of harmful bacteria and parasites. This helps in maintaining the health of the cows and the quality of the milk produced.",
      "Implementing a routine health check for your cows is also essential. Monitor for signs of illness or distress and have a veterinarian perform regular health checks and vaccinations. Early detection of health issues can prevent more serious problems and ensure the well-being of the herd.",
      "Proper nutrition is another critical aspect. Ensure that cows have access to a balanced diet that meets their nutritional needs. This includes high-quality forage, grains, and supplements. Regularly assess the body condition of your cows and adjust their diet accordingly.",
      "Lastly, maintain your equipment and infrastructure. Regularly inspect and service milking machines, water systems, and feeding equipment. Keeping everything in good working order prevents breakdowns and ensures that your farm runs smoothly and efficiently.",
    ],
  },
  {
    id: "5",
    title: "How to Prepare for Calving Season",
    date: "January 10, 2024",
    excerpt:
      "Step-by-step guide to preparing for calving season to ensure a smooth and successful process...",
    imageURL: "https://i.ibb.co/8zQVt3H/cow-blog-1.jpg",
    longDescription: [
      "Preparing for calving season is a critical task for any cattle farmer. Ensuring that you are well-prepared can lead to a higher success rate for births and healthier calves.",
      "Start by setting up a clean, comfortable, and safe calving area. This area should be easily accessible, with good lighting and ventilation. Regularly clean and disinfect the space to prevent the spread of diseases.",
      "Gather necessary supplies ahead of time. This includes clean towels, iodine for disinfecting the navel, calf pullers, and a good source of colostrum. Having these supplies ready can make the process smoother and reduce stress on both the cow and the farmer.",
      "Monitor your cows closely as they approach their due dates. Look for signs of labor such as restlessness, reduced appetite, and the development of the udder. Being present during calving can help you assist if there are any complications.",
      "Post-calving care is equally important. Ensure that the calf receives colostrum within the first few hours of life, as it is crucial for immunity. Monitor the cow for any signs of postpartum complications and provide appropriate care as needed.",
    ],
  },
  {
    id: "6",
    title: "The Future of Dairy Farming: Trends and Innovations",
    date: "December 25, 2023",
    excerpt:
      "Discover the latest trends and innovations shaping the future of dairy farming and the livestock industry...",
    imageURL: "https://i.ibb.co/8zQVt3H/cow-blog-1.jpg",
    longDescription: [
      "The dairy farming industry is constantly evolving, with new trends and innovations enhancing efficiency, sustainability, and profitability. Understanding these trends can help farmers stay ahead of the curve and implement strategies that drive success.",
      "One significant trend is the adoption of precision farming technologies. These include automated milking systems, activity monitors, and health tracking devices. These technologies provide real-time data on the health and productivity of the herd, allowing for more precise and timely management decisions.",
      "Sustainability is another key focus area. Many dairy farms are exploring ways to reduce their environmental footprint. This includes implementing renewable energy sources, such as solar panels and anaerobic digesters, and adopting practices that reduce greenhouse gas emissions.",
      "Innovations in feed and nutrition are also shaping the future of dairy farming. Research into alternative feed sources, such as insect protein and algae, is gaining traction. These alternatives can provide high nutritional value while reducing the reliance on traditional feed sources, which can be subject to market volatility.",
      "Lastly, there is a growing emphasis on animal welfare. Consumers are increasingly concerned about the treatment of animals, and farms that prioritize high welfare standards can gain a competitive edge. This includes providing ample space, proper nutrition, and minimizing stress through gentle handling practices.",
    ],
  },
];

const BlogSection = () => {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/blogs").then((res) => setBlogs(res.data));
  // }, []);

  return (
    <section className="text-center py-16 px-4 bg-white">
      <h2 className="text-4xl font-bold mb-4">Latest from Our Blog</h2>
      <p className="text-lg text-gray-600 mb-12">
        Stay updated with the latest news and articles
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, 3).map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
