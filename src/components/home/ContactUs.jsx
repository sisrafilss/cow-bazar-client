/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reset form fields after submission
    // Here you can add your POST API call
  };

  return (
    <section className="py-16 px-4 bg-gray-50 ">
      <div className="max-w-5xl mx-auto">
        <div className="w-full mb-8 lg:mb-0 text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you. Please fill out the form below.
          </p>
        </div>

        <div className="w-full px-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-left text-gray-700"
              >
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contactNumber"
                {...register("contactNumber", { required: true })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md h-32"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
