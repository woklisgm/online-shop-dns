import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { About } from '../pages/About';

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='about' element={<About />} />
			</Route>
		</Routes>
	)
}

export {Router};