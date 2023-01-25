import React from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import data from '../database/data.json';

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
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

function Tr({ id, name, avatar, email, salary, date, status }) {
  return (
    <tr className="text-center bg-gray-50">
      <td className="px-16 py-2 flex flex-row items-center">
        <img src={avatar || '#'} alt="avatar" />
        <span className="text-center ml-2 font-semibold capitalize">
          {name || 'unknown'}
        </span>
      </td>
      <td className="px-18 py-2">
        <span>{email || 'unknown'}</span>
      </td>
      <td className="px-18 py-2">
        <span>&#x20B5;{salary || 'unknown'}</span>
      </td>
      <td className="px-18 py-2">
        <span>{date || 'unknown'}</span>
      </td>
      <td className="px-18 py-2">
        <button type="" className="cursor">
          <span className="bg-green-500 text-white px-5 py-1 rounded-full">
            {status || 'unknown'}
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
  );
}
