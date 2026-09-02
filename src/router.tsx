import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
	const router = createRouter({
		scrollRestoration: true,
		routeTree,
		defaultPreload: 'intent',
		defaultNotFoundComponent: () => (
			<div>
				<h1>404</h1>
				<p>Page not found</p>
			</div>
		),
	})

	return router
}
