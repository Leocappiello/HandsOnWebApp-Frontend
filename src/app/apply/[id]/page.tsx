'use client';
import { applySchema, Inputs } from '@/app/lib/applySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { sendFormData } from './sendFormData';



const Apply = ({params: {id}}: {params: {id: string}}) => {
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const result = await sendFormData(id, data);
        console.log(result);
    }

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({
        resolver: zodResolver(applySchema)
    });

    return (
    <form onSubmit={handleSubmit(data => onSubmit(data))}  className="grid w-1/2 gap-y-1 h-1/4 bg-purple-200 rounded-md px-4 py-1">
        <label className='text-purple-500' htmlFor="username">Username</label>
        <input type="text" id="username"
            {...register('username')}
        />
        {
            errors.username?.message &&
            <p className='text-red-500'>{errors.username?.message}</p>
        }

        <label className='text-purple-500' htmlFor="email">Email</label>
        <input type="email" id="email"
            {...register('email')}
        />
        {
            errors.email?.message &&
            <p className='text-red-500'>{errors.email?.message}</p>
        }

        <label className='text-purple-500' htmlFor="applianceText">Description</label>
        <input type="text" id="applianceText"
            {...register('applianceText')}
        />
        {
            errors.applianceText?.message &&
            <p className='text-red-500'>{errors.applianceText?.message}</p>
        }
        
        <div className='w-full flex justify-center'>
            <button type="submit" className='text-white bg-slate-900 my-2 rounded-md w-1/3 py-2'>Submit</button>
        </div>
    </form>
    )
}

export default Apply
