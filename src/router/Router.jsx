import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Wishlist } from '../pages/Wishlist';

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='wishlist' element={<Wishlist />} />
			</Route>
		</Routes>
	);
}

export {Router};