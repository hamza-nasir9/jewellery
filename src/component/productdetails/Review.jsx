import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
function Review() {
  const handeltoast = ()=> toast.success(`Your review has been submitted successfully!`);
  const Error = ()=> toast.error(`Please fill out the form correctly before submitting!`);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Review = (data) => {
    console.log(data);
    handeltoast()
    reset();
  };

  const onError = ()=>{
    Error()
  }

  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmit( Review , onError)}
        action=""
        className="w-[72vw] p-8 shadow-lg shadow-gray-400 "
      >
        <div className="flex justify-around relative">
          <input
            type="text"
            {...register("UserName", {
              required: "Please Enter Your Name",
              maxLength: {
                value: 20,
                message: "Name must be less than 20 characters",
              },
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters long",
              },
              pattern: {
                value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                message: "Name must contain only alphabets",
              },
            })}
            placeholder="Name *"
            className="w-[47%] p-2 focus:outline-none border-black border-[1px]"
          />
          {errors.UserName && (
            <p className="absolute top-[-23px] text-red-600 left-5">
              {errors.UserName.message}
            </p>
          )}
          <input
            type="email"
            placeholder="Email *"
            {...register("email", { required: true })}
            className="w-[46%] p-2 focus:outline-none border-black border-[1px]"
          />
          {errors.email && (
            <p className="absolute top-[-23px] right-72 text-red-600">
              {" "}
              Please Enter Your Email
            </p>
          )}
        </div>
        <div className="flex justify-center my-10 relative ">
          <textarea
            name=""
            id=""
            placeholder="your review *"
            cols="10"
            rows="5"
            className="p-2 w-[97%] border-black border-[1px] capitalize focus:outline-none"
            {...register("review", { required: true })}
          ></textarea>
          {errors.review && (
            <p className="absolute top-[-23px] text-red-600 left-5">
              Enter Your Message
            </p>
          )}
        </div>

        <input
          type="submit"
          value="submit"
          className=" border-[1px] border-black capitalize hover:bg-black hover:text-white rounded-md ml-3 px-5 py-2"
        />
      </form>
    </div>
  );
}

export default Review;
