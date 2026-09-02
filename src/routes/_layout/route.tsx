import { featureFlags } from '@/validation/env'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div>
			<nav>
				<ul>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					{featureFlags.contact && <Link to='/contact'>Contact</Link>}
				</ul>
			</nav>
			<Outlet />
		</div>
	)
}
