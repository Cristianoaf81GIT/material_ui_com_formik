
import * as yup from 'yup';



export const inputs = {
  data: [
    {
      type: 'text',
      name: 'nome',
      id: 'name',
      label: 'Nome',
      checked: true,
      required: true,      
    },
    {
      type: 'text',
      name: 'endereco',
      id: 'endereco',
      label: 'Endereco',
      checked: true,
      required: false,
    },
    {
      type: 'number',
      name: 'idade',
      id: 'idade',
      label: 'Idade',
      checked: true,
      required: true,
    },
    {
      type: 'checkbox',
      name: 'termos',
      id: 'termos',
      label: 'termos',
      checked: true,
      required: false,
    }  
  ],
  initialValues: {
    nome: "",
    endereco: "",
    idade: 0,
    termos: false,
  },
  validationSchema: yup.object({
    nome: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "O nome deve conter ao menos 8 caracteres"),
    endereco: yup.string(),
    idade: yup.number().min(18, "A idade deve ser pelo menos 18 anos"),
    termos: yup.boolean(),
  })

}