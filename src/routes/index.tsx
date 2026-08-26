import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
	component: RouteComponent,
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
			Hello
			<Button>Click</Button>
		</div>
	)
}
