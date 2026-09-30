import { createFileRoute } from '@tanstack/react-router'
import { featureFlags } from '@/validation/env'

export const Route = createFileRoute('/_layout/contact')({
	component: RouteComponent,
	beforeLoad: () => {
		if (!featureFlags.contact) {
			throw new Error('Contact feature is disabled')
		}
	},
})

function RouteComponent() {
	return <div>Hello "/contact"!</div>
}
