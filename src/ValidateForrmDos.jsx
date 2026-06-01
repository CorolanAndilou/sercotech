import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';


export function HookForm() {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = (data) => console.log(data);


 return (
   <form onSubmit={handleSubmit(onSubmit)}>
     <input
       {...register('email', {
         required: 'Este campo es requerido',
         pattern: {
           value: /^\S+@\S+$/i,
           message: 'Debe ser un email válido'
         }
       })}
     />
     {errors.email && <span>{errors.email.message}</span>}
     <Button variant="success" type="submit">Enviar</Button>
   </form>
 );
}
