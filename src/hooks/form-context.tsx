import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { FormButton } from '@/components/form/formButton'
import { FormTextField } from '@/components/form/textfield'

export const { fieldContext, useFieldContext, formContext, useFormContext } =
	createFormHookContexts()

export const { useAppForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: { FormTextField },
	formComponents: { FormButton },
})
