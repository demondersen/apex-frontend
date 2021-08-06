import React, { useRef } from 'react';
import axios from 'axios';

const Form = ({ setUserdata, setLifetime, setLegends, setError }) => {
	const platformRef = useRef();
	const playerRef = useRef();

	const searchPlayer = (e) => {
		e.preventDefault();
		const playerId = playerRef.current.value;
		const platform = platformRef.current.value;
		axios
			.get(`http://localhost:8000/${platform}/${playerId}`)
			.then((response) => {
				// prendi i dati dell utente //
				const user = response.data.data.platformInfo;
				// setta userdata con i dati dell utente //
				setUserdata(user);
				// prendi i segments //
				const segments = response.data.data.segments;
				// FILTRO I SEGMENTS E PRENDO SOLO LE LIFETIME STATS (PRIMO ELEM. DELL ARRAY) //
				const lifetimeStats = segments.filter((segment) => segment.type === 'overview')[0];
				// setta le lifetime stats //
				setLifetime(lifetimeStats);
				// FILTRO I SEGMENTS E RIMUOVO LIFETIME E LASCIO SOLO LE LEGENDS NELL ARRAY //
				const allLegends = segments.filter((segment) => segment.type !== 'overview');
				// setta le legends //
				setLegends(allLegends);
			})
			.catch(() => {
				setError(true);
				setUserdata(null);
				setLifetime(null);
				setLegends([]);
			});
	};

	return (
		<form style={{ width: '340px', minHeight: '40vh' }} className='flex justify-center flex-col'>
			<div className='flex mb-4'>
				<div className='mr-2 flex flex-col'>
					<p className='text-white text-center uppercase text-xs py-2 bg-black bg-opacity-40'>
						platform
					</p>
					<select
						className='px-3 uppercase flex-1 outline-none focus:border focus:border-red-400 border border-white transition-all duration-300 text-gray-500'
						ref={platformRef}
						required
					>
						<option value='origin'>Origin</option>
						<option value='psn'>PSN</option>
						<option value='xbox'>Xbox</option>
					</select>
				</div>
				<div className='flex-1 ml-2 flex flex-col'>
					<p className='text-white text-center uppercase text-xs py-2 bg-black bg-opacity-40'>
						username
					</p>
					<input
						className='text-center py-2 w-full outline-none focus:border focus:border-red-400 border border-white transition-all duration-300  text-gray-500'
						type='text'
						ref={playerRef}
						required
					/>
				</div>
			</div>
			<button
				className='bg-red-400 py-3 text-xl text-white font-bold tracking-widest'
				onClick={(e) => searchPlayer(e)}
			>
				SEARCH
			</button>
		</form>
	);
};

export default Form;
