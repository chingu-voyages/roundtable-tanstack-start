import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
	component: RouteComponent,
	beforeLoad: () => {
		console.log('beforeLoad "/about"!')
	},
})

function RouteComponent() {
	return (
		<div>
			<nav>
				<ul>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</ul>
			</nav>
			Hello "/about"!
		</div>
	)
}
