import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/users/')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div>
			<h1>Users</h1>
			<ul>
				<li>
					<Link to='/users/$id' params={{ id: 44 }}>
						User 1
					</Link>
				</li>
			</ul>
		</div>
	)
}
