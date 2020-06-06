import Router from 'next/router';
import { useState } from 'react';

import Input from '../component/input';

const Index = () => {
  // State for Names
  let [name, setName] = useState({
    first: undefined,
    last: undefined,
  });

  return (
    <div className="flex justify-center h-full" style={{backgroundImage: `url(https://i.picsum.photos/id/314/1920/1080.jpg?blur=5`}}>
      <div className="p-4 shadow rounded bg-white m-8">
        <h1 className="text-black text-4xl">Generate an aesthetic based on your name</h1>
        <div className="w-full mt-4">
          <form >
            <Input onChange={(e) => {setName({ ...name, first: e.target.value })}} placeholder="First Name" input={name.first} />
            <Input onChange={(e) => {setName({ ...name, last: e.target.value })}} placeholder="First Name" input={name.last} />
          </form>
          <button onClick={() => Router.push(`/${name.first}/${name.last}`)} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`} type="button">
            View
          </button>
        </div>
      </div>
      <img src="https://hampton.goatcounter.com/count?p=/projects/nameaesthetics/index"></img>
    </div>
  );
}

export default Index;
