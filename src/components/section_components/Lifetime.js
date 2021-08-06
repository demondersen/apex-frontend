import React from 'react';
import Pill from '../Pill';

const Lifetime = ({ lifetime }) => {
	return (
		<div className='text-center mt-8'>
			<p className='uppercase text-gray-500 font-bold mb-4'>lifetime stats</p>
			<div className='flex flex-wrap justify-center items-center'>
				<Pill statName={'level'} statValue={lifetime.stats.level.displayValue} />
				<Pill statName={'kills'} statValue={lifetime.stats.kills.displayValue} />
				<Pill statName={'damage'} statValue={lifetime.stats.damage.displayValue} />
			</div>
		</div>
	);
};

export default Lifetime;
