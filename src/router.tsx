import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
	const router = createRouter({
		scrollRestoration: true,
		routeTree,
		defaultPreload: 'intent',
	})

	return router
}
