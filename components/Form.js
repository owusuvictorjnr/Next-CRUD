import React from 'react';

const Form = () => {
  return (
    <form className="">
      <div className="input-type">
        <input
          type="text"
          name="fn"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="ln"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name=""
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="salary"
        />
      </div>

      <div className="input-type">
        <input
          type="radio"
          name="status"
          value="Active"
          id="radioDefault1"
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          placeholder=""
        />
        <label
          for="radioDefault1"
          className="inline-block text-gray-800 capitalize"
        >
          active
        </label>
      </div>

      <div className="input-type">
        <input
          type="radio"
          name="status"
          value="Inactive"
          id="radioDefault2"
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          placeholder=""
        />
        <label
          for="radioDefault2"
          className="inline-block text-gray-800 capitalize"
        >
          inactive
        </label>
      </div>

      <button
        type=""
        className="flex justify-center text-md w-2/6 capitalize bg-green-500 text-white px-4 py-2 hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
      >
        add
      </button>
    </form>
  );
};

export default Form;
