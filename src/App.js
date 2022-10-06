import './App.css';
import Card from './components/Card';

function App() {
	const title = 'Improve your front-end skills by building projects';
	const body =
		'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

	return (
		<div className='App'>
			<Card
				title={title}
				body={body}
				img={'./image-qr-code.png'}
				alt={'QR Code'}
			></Card>
		</div>
	);
}

export default App;
