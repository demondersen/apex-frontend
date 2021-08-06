import React from 'react';

const LegendCard = ({ legend }) => {
	return (
		<div className='flex w-1/2 p-4'>
			<div className='flex shadow-md pb-6 rounded-md'>
				<div className='w-2/3'>
					<img className='w-full' src={legend.metadata.imageUrl} alt={legend.metadata.imageUrl} />
				</div>
				<div className='flex flex-col justify-center uppercase text-center'>
					<p className='text-gray-500 text-md mb-4'>{legend.metadata.name}</p>
					<p className='text-red-400 text-xs'>kills</p>
					<p className='font-bold text-lg'>
						{legend.stats.kills ? legend.stats.kills.displayValue : 'N/A'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default LegendCard;
