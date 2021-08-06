import React from 'react';
import Header from './section_components/Header';
import Lifetime from './section_components/Lifetime';
import Legends from './section_components/Legends';

const Section = ({ userdata, lifetime, legends }) => {
	return (
		<section style={{ width: '600px' }} className='mt-10 bg-white p-4'>
			<Header userdata={userdata} />
			<Lifetime lifetime={lifetime} />
			<Legends legends={legends} />
		</section>
	);
};

export default Section;
