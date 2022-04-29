import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { About } from '../pages/About';
import { Home } from '../pages/Home';

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
			</Route>
		</Routes>
	);
}

export {Router};