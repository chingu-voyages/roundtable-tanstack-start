import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_layout/users/')({
    component: RouteComponent,
})

function RouteComponent() {
    const navigate = Route.useNavigate()

    return (
        <div>
            <h1>Users</h1>

            <Button
                onClick={() => {
                    navigate({ to: '/users/new' })
                }}
            >
                Add user
            </Button>

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
