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
		defaultErrorComponent: ({ error }) => (
			<div>
				<h1>500</h1>
				<p>{error.message}</p>
			</div>
		),
	})

	return router
}
