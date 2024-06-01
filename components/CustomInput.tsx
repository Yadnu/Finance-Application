import React from 'react'
import {Control, FieldPath} from 'react-hook-form'
import { Input } from './ui/input'
import { z } from "zod"
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { authFormSchema } from '@/lib/utils'
const formSchema = authFormSchema('sign-up');
interface CustomInputProps  {
 control :  Control<z.infer<typeof formSchema>>
 name: FieldPath<z.infer<typeof formSchema>>
 label: string
 placeholder: string
}
const CustomInput = ({control, name, label, placeholder }:CustomInputProps) => {
  return (
    
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label'>
              {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
                <Input placeholder={placeholder} className='input-class'
                type={name === 'password' ? 'password': 'text'}
                {...field}/>
            </FormControl>
            <FormMessage className='form-message mt-2'>

            </FormMessage>
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput