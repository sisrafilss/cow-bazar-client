import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { apiBaseUrl } from "../../config";
import { useState } from "react";
import LoadingComponent from "../../components/LoadingComponent";

function EditCow() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const token = localStorage.getItem("token");
  const cow = useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to add this cow: "${data.title}"?`
    );

    if (userConfirmed) {
      setIsLoading(true);
      axios
        .patch(`${apiBaseUrl}/cows/${cow?._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function () {
          setIsLoading(false);
          toast.success("Cow's Data Updated!");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(e.target.files);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }

  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Edit the Cow Information
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                defaultValue={cow?.title}
                {...register("title", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.title && (
                <span className="text-red-500 text-sm">Title is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("description", { required: true })}
                defaultValue={cow?.description}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  Description is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Long Description
              </label>
              <textarea
                defaultValue={cow?.long_description}
                {...register("long_description", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.long_description && (
                <span className="text-red-500 text-sm">
                  Long Description is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                defaultValue={cow?.price}
                {...register("price", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.price && (
                <span className="text-red-500 text-sm">Price is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                defaultValue={cow?.age}
                {...register("age", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.age && (
                <span className="text-red-500 text-sm">Age is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Breed
              </label>
              <input
                type="text"
                defaultValue={cow?.breed}
                {...register("breed", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.breed && (
                <span className="text-red-500 text-sm">Breed is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>
              <input
                type="number"
                defaultValue={cow?.weight}
                {...register("weight", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.weight && (
                <span className="text-red-500 text-sm">Weight is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                defaultValue={cow?.location}
                {...register("location", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.location && (
                <span className="text-red-500 text-sm">
                  Location is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                defaultValue={cow?.rating}
                step="0.1"
                {...register("rating", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.rating && (
                <span className="text-red-500 text-sm">Rating is required</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                accept="image/jpeg, image/png"
                {...register("image")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                onChange={handleImageChange}
              />
              {errors.image && (
                <span className="text-red-500 text-sm">Image is required</span>
              )}

              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Selected"
                  className="mt-2 h-32 w-32 object-cover"
                />
              ) : (
                <img
                  src={cow?.image_url}
                  alt="Current"
                  className="mt-2 h-32 w-32 object-cover"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Update Data
            </button>
          </form>
        </div>
      </div>

      <LoadingComponent isLoading={isLoading} message="Updaing Data..." />
    </>
  );
}

export default EditCow;
