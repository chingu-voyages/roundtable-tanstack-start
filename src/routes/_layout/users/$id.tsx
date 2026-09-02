import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/users/$id')({
	params: {
		parse: (rawParams) => {
			const id = Number.parseInt(rawParams.id, 10)
			if (Number.isNaN(id)) {
				throw new Error('Invalid id')
			}
			return { id }
		},
	},
	component: RouteComponent,
})

function RouteComponent() {
	const { id } = Route.useParams()

	return <div>Hello "/_layout/users/{id}"! </div>
}
