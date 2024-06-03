import { useForm } from "react-hook-form";

const NewsletterSection = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data.email);
    reset(); // Reset form field after submission
    // Here you can add your POST API call
  };

  return (
    <section
      className="relative py-16 px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/mhds1Hd/newsletter-bg.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-2xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Stay Updated on Farm News</h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter for the latest updates on cow breeds, dairy farming tips, and more!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="p-3 w-full sm:w-auto border border-gray-300 rounded-md text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
