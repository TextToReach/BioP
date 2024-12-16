import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/page.tsx'
import { BrowserRouter, Routes, Route, HashRouter, Link } from "react-router-dom";

function MainPage() {
	return (
		<div className='size-full flex justify-center items-center gap-8'>
			<Link to="/Mitoz">
				<button className='btn'>Mitoz</button>
			</Link>
			<Link to="/Mayoz">
				<button className='btn'>Mayoz</button>
			</Link>
		</div>
	)
}

export default function Main() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/">
					<Route index element={<MainPage />}></Route>
					<Route path="Mitoz" element={<App mode='Mitoz' />} />
					<Route path="Mayoz" element={<App mode='Mayoz' />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

createRoot(document.getElementById('root')!).render(
	<Main />
)