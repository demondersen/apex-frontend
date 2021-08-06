import React from 'react';

const Header = ({ userdata }) => {
	return (
		<div className='flex flex-col items-center'>
			<img
				style={{ width: '60px' }}
				className='rounded-full mb-4'
				src={userdata.avatarUrl}
				alt={userdata.platformUserIdentifier}
			/>
			<p className='text-center uppercase  text-gray-500 font-bold mb-4'>
				{userdata.platformUserIdentifier}
			</p>
		</div>
	);
};

export default Header;
