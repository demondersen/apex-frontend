import './styles/compiled.css';
import image from './images/bg.jpg';
import { useState } from 'react';
import Section from './components/Section';
import Form from './components/Form';
import Error from './components/Error';

const App = () => {
	const [userdata, setUserdata] = useState(null);
	const [lifetime, setLifetime] = useState(null);
	const [legends, setLegends] = useState([]);
	const [error, setError] = useState(false);

	return (
		<>
			<div
				style={{ backgroundImage: `url(${image})`, zIndex: -1 }}
				className='fixed top-0 left-0 w-screen h-screen bg-cover bg-center'
			/>
			<div className='flex flex-col min-h-screen w-screen items-center justify-center font-primary'>
				<Form
					setUserdata={setUserdata}
					setLifetime={setLifetime}
					setLegends={setLegends}
					setError={setError}
				/>
				{userdata && lifetime && legends && (
					<Section userdata={userdata} lifetime={lifetime} legends={legends} />
				)}
				{error && !userdata && <Error />}
			</div>
		</>
	);
};

export default App;
