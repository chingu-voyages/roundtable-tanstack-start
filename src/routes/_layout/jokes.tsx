import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/_layout/jokes')({
	component: RouteComponent,
})

async function getJoke() {
	const query = await fetch('https://api.chucknorris.io/jokes/random')
	const data = await query.json()
	return data
}

type JokeQuery = {
	icon_url: string,
	id: string,
	url: string,
	value: string
}

function RouteComponent() {
	const [joke, setJoke] = useState<JokeQuery>()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(async () => {
		setLoading(true)
		try {
			const data = await getJoke()
			setJoke(data)
		} catch (err) {
			setError(err.message)
		}
		setLoading(false)
	}, [])


	return <div>
		{loading && <p>Loading...</p>}
		{error && <p>{error}</p>}
		<p>{joke?.value}</p>
	</div>
}
