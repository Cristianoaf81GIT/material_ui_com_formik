import React from "react";
import { useFormik } from "formik";
import { inputs } from "./inputs";
import {
  Button,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  TextField,
  TextFieldProps,
} from "@material-ui/core";

// interface para definir o tipo dos campos Fields
interface IFieldsProps {
  text: (props: TextFieldProps) => JSX.Element;
  number: (props: TextFieldProps) => JSX.Element;
  checkbox: (props: CheckboxProps) => JSX.Element;
}

// funcao que retorna um componente material-ui
const Fields: IFieldsProps = {
  text: TextField,
  number: TextField,
  checkbox: Checkbox,
};

// funcão que retorna o input de acordo com o type
const CustomInput = (
  props: JSX.IntrinsicAttributes & (TextFieldProps & CheckboxProps)
) => {
  const Field = Fields[props.type as keyof IFieldsProps];

  return props.type === "checkbox" ? (
    <FormControlLabel
      control={<Field {...props} defaultChecked={props.checked} />}
      label={props.label}
    />
  ) : (
    <Field {...props} />
  );
};

export const MyForm = () => {
  const formik = useFormik({
    initialValues: inputs.initialValues, // obtem valores do objeto input
    validationSchema: inputs.validationSchema, // a validacao pode vir do input tmb
    onSubmit: (values) => window.alert(JSON.stringify(values)), // submit
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* itera sobre o array de objetos inputs.data */}
        {inputs.data.map((field) => (
          <>
            <CustomInput
              style={{ margin: 8 }}
              name={field.name}
              label={field.label}
              type={field.type}
              value={formik.values[field.name as keyof {}]}
              required={field.required}
              onChange={formik.handleChange}
              error={
                formik.touched[field.name as keyof {}] &&
                Boolean(formik.errors[field.name as keyof {}])
              }
              helperText={
                formik.touched[field.name as keyof {}] &&
                formik.errors[field.name as keyof {}]
              }
            />
          </>
        ))}
        <br />
        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};
