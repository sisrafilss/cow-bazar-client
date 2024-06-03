// import { useEffect, useState } from "react";
// import ProductCard from "../ProductCard";
// import axios from "axios";

import CowCard from "../CowCard";

const TopCows = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/products")
  //     .then((res) => setProducts(res.data));
  // }, []);

  return (
    <div className="my-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-6">Top Rated Cows</h2>
        <p className="max-w-xl mx-auto">
          Explore Our Best Selections Handpicked for Quality and Excellence
        </p>
      </div>
      <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cows.slice(0, 4).map((cow) => (
          <CowCard key={cow.id} cow={cow} />
        ))}
      </div>
    </div>
  );
};

export default TopCows;

const cows = [
  {
    id: 1,
    title: "Holstein Friesian",
    description: "High milk production, excellent for dairy farms.",
    long_description: "The Holstein Friesian cow is renowned for its high milk production, making it an ideal choice for dairy farmers. Originating from the Dutch provinces of North Holland and Friesland, this breed is recognized for its distinctive black and white markings and large size. A typical Holstein can weigh up to 680 kilograms (1500 pounds), and its milk yield is unparalleled, offering a high volume of milk with moderate butterfat content. Holsteins are highly adaptable to various climates and environments, making them a versatile addition to any dairy operation. With a gentle disposition and ease of handling, Holsteins are a favorite among dairy farmers.",
    price: 2500,
    age: 3,
    breed: "Holstein",
    weight: 680,
    location: "Texas, USA",
    rating: 4.8,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 2,
    title: "Jersey Cow",
    description: "Known for rich milk with high butterfat content.",
    long_description: "Jersey cows are famed for their rich, creamy milk, which has a high butterfat content ideal for producing cheese, butter, and ice cream. Originating from the British Channel Island of Jersey, these cows are smaller in stature, typically weighing around 450 kilograms (1000 pounds). Despite their smaller size, Jersey cows are efficient producers, requiring less feed than larger breeds. Their milk is not only high in butterfat but also in protein, making it highly sought after in the dairy industry. Jerseys are known for their docile and friendly nature, making them easy to manage and a joy to work with on any farm.",
    price: 2200,
    age: 4,
    breed: "Jersey",
    weight: 450,
    location: "California, USA",
    rating: 4.7,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 3,
    title: "Angus Cow",
    description: "Excellent beef quality, great for meat production.",
    long_description: "The Angus cow, also known as Aberdeen Angus, is a breed of beef cattle known for its excellent meat quality. Originating from Scotland, Angus cattle are renowned for their marbled meat, which is juicy, tender, and full of flavor. These cows typically weigh around 820 kilograms (1800 pounds), making them substantial and profitable for meat production. Angus cows are naturally polled, meaning they do not have horns, which makes them safer and easier to handle. They are also known for their hardiness and ability to thrive in various environmental conditions, making them a reliable choice for beef farmers.",
    price: 3000,
    age: 5,
    breed: "Angus",
    weight: 820,
    location: "Nebraska, USA",
    rating: 4.9,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 4,
    title: "Guernsey Cow",
    description: "Produces high-quality milk with good protein content.",
    long_description: "Guernsey cows are valued for their high-quality milk, which has a rich flavor and high protein content. Originating from the Channel Island of Guernsey, this breed is known for its distinctive reddish-brown and white coat. Guernsey cows typically weigh around 540 kilograms (1200 pounds). They are efficient grazers and have a friendly and calm disposition, making them a great addition to any dairy farm. Their milk is particularly prized for its golden color, which comes from high levels of beta-carotene, an important nutrient. Guernsey cows are known for their good health, longevity, and adaptability to various farming conditions.",
    price: 2400,
    age: 3,
    breed: "Guernsey",
    weight: 540,
    location: "Wisconsin, USA",
    rating: 4.6,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 5,
    title: "Hereford Cow",
    description: "Robust and adaptable, ideal for beef production.",
    long_description: "Hereford cows are a popular breed for beef production, known for their robust and adaptable nature. Originating from Herefordshire in England, they are easily recognizable by their red bodies and white faces. Herefords typically weigh around 770 kilograms (1700 pounds). They are known for their high feed efficiency, meaning they can produce more meat from less feed compared to other breeds. Hereford beef is renowned for its quality, with a fine texture and excellent flavor. The breed is also known for its docility and ease of handling, making it a favorite among beef producers. Herefords are hardy and can thrive in a variety of climates.",
    price: 2800,
    age: 4,
    breed: "Hereford",
    weight: 770,
    location: "Kansas, USA",
    rating: 4.8,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 6,
    title: "Ayrshire Cow",
    description: "Balanced milk production with good quality milk.",
    long_description: "Ayrshire cows, originating from Ayrshire in Scotland, are known for their balanced milk production and good-quality milk. These cows are medium-sized, typically weighing around 635 kilograms (1400 pounds). Ayrshires are efficient grazers and are known for their ability to convert grass into high-quality milk, which is well-balanced in butterfat and protein. Their distinctive red and white coat makes them easily recognizable. Ayrshires are known for their hardiness and ability to adapt to various climates, making them a reliable choice for dairy farmers worldwide. They have a calm temperament and are easy to manage, adding to their appeal.",
    price: 2600,
    age: 3,
    breed: "Ayrshire",
    weight: 635,
    location: "Minnesota, USA",
    rating: 4.7,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 7,
    title: "Limousin Cow",
    description: "Excellent for meat production with high feed efficiency.",
    long_description: "Limousin cows are a breed of beef cattle known for their excellent meat production and high feed efficiency. Originating from the Limousin and Marche regions of France, these cows are well-muscled and have a distinctive golden-red coat. Limousin cows typically weigh around 725 kilograms (1600 pounds). They are known for their lean meat, which has a fine texture and exceptional flavor. Limousins are highly efficient in converting feed into muscle, making them a cost-effective choice for beef producers. The breed is also known for its adaptability and hardiness, capable of thriving in a variety of environments and climatic conditions.",
    price: 2900,
    age: 5,
    breed: "Limousin",
    weight: 725,
    location: "Oklahoma, USA",
    rating: 4.9,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 8,
    title: "Simmental Cow",
    description: "Versatile breed, great for both milk and meat production.",
    long_description: "Simmental cows are one of the oldest and most widely distributed breeds of cattle in the world, known for their versatility in both milk and meat production. Originating from the Simme Valley of Switzerland, Simmentals are large, robust cows typically weighing around 703 kilograms (1550 pounds). They have a distinctive red and white spotted coat. Simmental milk is highly prized for its high protein and butterfat content, making it ideal for cheese production. The breed is also known for its excellent meat quality, with well-marbled and flavorful beef. Simmentals are adaptable, hardy, and have a calm temperament, making them a valuable addition to any farm.",
    price: 2700,
    age: 4,
    breed: "Simmental",
    weight: 703,
    location: "Iowa, USA",
    rating: 4.8,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 9,
    title: "Brown Swiss Cow",
    description: "High milk yield with excellent cheese-making properties.",
    long_description: "Brown Swiss cows are known for their high milk yield and excellent cheese-making properties. Originating from the Swiss Alps, this breed is one of the oldest dairy breeds in the world. Brown Swiss cows typically weigh around 657 kilograms (1450 pounds). They produce large quantities of milk that is rich in protein, making it ideal for cheese production. The milk from Brown Swiss cows has a pleasant flavor and is used in many high-quality dairy products. The breed is also known for its longevity, hardiness, and gentle temperament. Brown Swiss cows are efficient grazers and thrive in a variety of environmental conditions.",
    price: 2500,
    age: 3,
    breed: "Brown Swiss",
    weight: 657,
    location: "Ohio, USA",
    rating: 4.7,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  },
  {
    id: 10,
    title: "Charolais Cow",
    description: "Superior muscle development, ideal for beef.",
    long_description: "Charolais cows, originating from the Charolais area in France, are known for their superior muscle development and are highly prized for beef production. These cows are large, typically weighing around 794 kilograms (1750 pounds). Charolais beef is known for its excellent quality, with a fine texture and great flavor. The breed is highly efficient in feed conversion, making them cost-effective for meat producers. Charolais cows have a distinctive white or cream-colored coat and are known for their calm disposition. They are adaptable to various environmental conditions and are highly valued for their productivity and ease of management.",
    price: 3100,
    age: 4,
    breed: "Charolais",
    weight: 794,
    location: "Montana, USA",
    rating: 4.9,
    image_url: "https://i.ibb.co/sVcDzrS/cow-1.jpg"
  }
]
