import React from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';

const Table = () => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-900 capitalize">
          <th className="px-16 py-2">
            <span className="text-gray-200">name</span>
          </th>

          <th className="px-16 py-2 ">
            <span className="text-gray-200">email</span>
          </th>

          <th className="px-16 py-2">
            <span className="text-gray-200">salary</span>
          </th>

          <th className="px-16 py-2">
            <span className="text-gray-200">bithday</span>
          </th>

          <th className="px-16 py-2">
            <span className="text-gray-200">status</span>
          </th>

          <th className="px-16 py-2">
            <span className="text-gray-200">actions</span>
          </th>
        </tr>
      </thead>

      <tbody className="bg-gray-200">
        <tr className="text-center bg-gray-50">
          <td className="px-16 py-2 flex flex-row items-center">
            <img src="#" alt="" />
            <span className="text-center ml-2 font-semibold capitalize">
              daily tuition
            </span>
          </td>
          <td className="px-18 py-2">
            <span>dailytuition@gmail.com</span>
          </td>
          <td className="px-18 py-2">
            <span>&#x20B5;100</span>
          </td>
          <td className="px-18 py-2">
            <span>25-01-2023</span>
          </td>
          <td className="px-18 py-2">
            <button type="" className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                active
              </span>
            </button>
          </td>
          <td className="px-16 py-2 flex justify-around gap-5">
            <button type="" className="cursor">
              <BiEdit size={25} color={'rgb(34,197,94)'} />
            </button>

            <button type="" className="cursor">
              <BiTrashAlt size={25} color={'rgb(244,63,94)'} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
