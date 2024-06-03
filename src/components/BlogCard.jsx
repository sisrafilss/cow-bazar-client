/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md mx-2 mb-6">
    <img
      src={blog.imageURL}
      alt={blog.title}
      className="w-full h-48 rounded-lg mb-4 object-cover"
    />
    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
    <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
    <p className="mb-4">{blog.excerpt}</p>
    <a href={blog.link} className="text-blue-500 hover:underline">
      Read More
    </a>
  </div>
);

export default BlogCard;
