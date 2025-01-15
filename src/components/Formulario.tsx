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
					className='mb-2 block text-lg font-medium text-rose-100'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					className='text-md block w-full rounded-lg border bg-white p-2.5 text-gray-900 shadow-sm'
					placeholder='ejempl@email.com'
					required
				/>
			</div>
			<div>
				<label
					htmlFor='subject'
					className='mb-2 block text-lg font-medium text-rose-100'
				>
					Concepto
				</label>
				<input
					type='text'
					id='subject'
					className='text-md block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm'
					placeholder='Contrataciones'
					required
				/>
			</div>
			<div className='sm:col-span-2'>
				<label
					htmlFor='message'
					className='mb-2 block text-lg font-medium text-white'
				>
					Mensaje
				</label>
				<textarea
					id='message'
					rows={6}
					className='text-md block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm'
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
