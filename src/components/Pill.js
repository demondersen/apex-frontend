import React from 'react';

const Pill = ({ statName, statValue }) => {
	return (
		<div className='flex bg-red-400 uppercase rounded-full py-1 px-6 my-2 mr-2'>
			<p className='text-white mr-3'>{statName}</p>
			<p className='text-black font-bold'>{statValue}</p>
		</div>
	);
};

export default Pill;
