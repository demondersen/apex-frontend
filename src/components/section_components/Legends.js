import React from 'react';
import LegendCard from './LegendCard';

const Legends = ({ legends }) => {
	return (
		<div className='mt-8'>
			<p className='uppercase text-gray-500 text-center font-bold'>legends</p>
			<div className='flex flex-wrap justify-around'>
				{legends.map((legend) => {
					return <LegendCard key={legend.metadata.name} legend={legend} />;
				})}
			</div>
		</div>
	);
};

export default Legends;
