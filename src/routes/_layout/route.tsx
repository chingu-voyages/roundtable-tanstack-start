import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { featureFlags } from '@/validation/env'

export const Route = createFileRoute('/_layout')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <nav>
                <ul className='flex gap-4 mb-3'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/users'>Users</Link>
                    {featureFlags.contact && <Link to='/contact'>Contact</Link>}
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}
