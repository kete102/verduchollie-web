import type { FormEvent } from 'react'

function Formulario() {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(event.currentTarget.name)
	}
	return (
		<form
			className='space-y-8'
			onSubmit={handleSubmit}
		>
			<div>
				<label
					htmlFor='email'
					className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
					placeholder='ejempl@email.com'
					required
				/>
			</div>
			<div>
				<label
					htmlFor='subject'
					className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					Concepto
				</label>
				<input
					type='text'
					id='subject'
					className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
					placeholder='Contrataciones'
					required
				/>
			</div>
			<div className='sm:col-span-2'>
				<label
					htmlFor='message'
					className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
				>
					Mensaje
				</label>
				<textarea
					id='message'
					rows={6}
					className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
					placeholder='Deja tu comentario...'
					required
				></textarea>
			</div>
			<button
				type='submit'
				className='dark:bg-[#2563eb"] rounded-lg bg-[#1d4ed8] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[#1e40af] focus:outline-none focus:ring-4 focus:ring-[#93c5fd] sm:w-fit dark:hover:bg-[#1d4ed8] dark:focus:ring-[#1e40af]'
			>
				Enviar mensaje
			</button>
		</form>
	)
}

export default Formulario
