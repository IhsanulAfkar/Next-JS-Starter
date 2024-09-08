import { ConfigFormProps } from '@/types'
import { div } from 'framer-motion/client'
import { NextPage } from 'next'
import { UseFormRegister } from 'react-hook-form'

interface Props {
    register: UseFormRegister<any>,
    config: ConfigFormProps
}

const InputForm: NextPage<Props> = ({ register, config }) => {
    return <div>
        <p className='mb-1 font-semibold'>{config.title}</p>
        <div className="relative">
            {config.error && (<p className="px-1 text-sm text-danger absolute right-4 top-1/2 -translate-y-1/2">{`${config.error.message}`}</p>)}
            <input type={config.type} placeholder={config.placeholder} className={'px-4 py-3 focus:outline-none text-sm rounded-md focus:ring-0 w-full ' + (config.error ? 'border-danger/50 hover:border-danger focus:border-danger' : 'border-[#B0B4C5]/50 hover:border-[#B0B4C5] focus:border-primary ')} {...register(config.name, config.registerConfig)} />
        </div>
    </div>
}

export default InputForm