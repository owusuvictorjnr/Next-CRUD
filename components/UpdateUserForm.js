import React from 'react';
import { useReducer } from 'react';
import { BiBrush } from 'react-icons/bi';
import Success from './Success';
import Error from './Error';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateUserForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log('You do not have form data');
    console.log(formData);
  };

  if (Object.keys(formData).length > 0)
    return <Error message={'error'} className="capitalize" />;

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="fn"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="ln"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="text"
          name="salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="salary"
        />
      </div>

      <div className="input-type">
        <input
          onChange={setFormData}
          type="date"
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          //   placeholder="Date"
        />
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            onChange={setFormData}
            type="radio"
            name="status"
            value="Active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            placeholder=""
          />
          <label
            htmlFor="radioDefault1"
            className="inline-block text-gray-800 capitalize"
          >
            active
          </label>
        </div>

        <div className="form-check">
          <input
            onChange={setFormData}
            type="radio"
            name="status"
            value="Inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            placeholder=""
          />
          <label
            htmlFor="radioDefault2"
            className="inline-block text-gray-800 capitalize"
          >
            inactive
          </label>
        </div>
      </div>

      <button
        type=""
        className="flex justify-center text-md w-2/6 capitalize bg-yellow-400 text-white px-4 py-2 hover:bg-gray-50 hover:border-green-500 hover:text-green-500 rounded-md"
      >
        update{' '}
        <span className="px-1">
          <BiBrush size={24} />
        </span>
      </button>
    </form>
  );
};

export default UpdateUserForm;
