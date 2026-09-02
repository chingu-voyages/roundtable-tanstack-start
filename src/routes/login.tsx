import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import {
	FieldDescription,
	FieldGroup,
	FieldLegend,
	FieldSet,
} from '@/components/ui/field'
import { useAppForm } from '@/hooks/form-context'

export const Route = createFileRoute('/login')({
	component: RouteComponent,
})

const loginSchema = z.object({
	username: z
		.string()
		.min(3, { message: 'Username must be at least 3 characters' }),
	password: z
		.string()
		.min(3, { message: 'Password must be at least 3 characters' }),
})

type Login = z.infer<typeof loginSchema>

function RouteComponent() {
	const form = useAppForm({
		defaultValues: {
			username: '',
			password: '',
		} as Login,
		onSubmit: (values) => {
			console.log(values)
		},
		validators: {
			onSubmit: loginSchema,
			onChange: loginSchema,
		},
	})

	return (
		<div className='w-1/2 mx-auto'>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					e.stopPropagation()
					form.handleSubmit()
				}}
			>
				<FieldSet>
					<FieldLegend>Login</FieldLegend>
					<FieldDescription>
						Enter your username and password to login
					</FieldDescription>
					<FieldGroup>
						<form.AppField name='username'>
							{(field) => (
								<field.FormTextField label='username' placeholder='username' />
							)}
						</form.AppField>
						<form.AppField name='password'>
							{(field) => (
								<field.FormTextField
									type='password'
									label='password'
									placeholder='password'
								/>
							)}
						</form.AppField>

						<form.AppForm>
							<form.FormButton label='Login' />
						</form.AppForm>
					</FieldGroup>
				</FieldSet>
			</form>
		</div>
	)
}
