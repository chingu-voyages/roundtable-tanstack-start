import { z } from 'zod'

const clientSchema = z.object({
	VITE_CONTACT_FLAG: z.string(),
})

export const clientEnv = clientSchema.parse(import.meta.env)

export const featureFlags = {
	contact: clientEnv.VITE_CONTACT_FLAG === 'true',
}
