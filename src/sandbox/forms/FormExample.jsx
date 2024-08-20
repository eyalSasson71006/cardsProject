import { Container} from "@mui/material";
import React from "react";
import useForm from "../../forms/hooks/useForm";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import loginSchema from "../../users/models/loginSchema";
import initialLoginForm from "../../users/helpers/initialForms/initialLoginForm";

const printSomething = (something) => {
  console.log(something);
};

export default function FormExample() {
  const { data, errors, handleChange, validateForm, onSubmit, handleReset } =
		useForm(initialLoginForm, loginSchema, printSomething);

  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="Login"
        onSubmit={onSubmit}
        onReset={handleReset}
        styles={{ maxWidth: "450px" }}
        validateForm={validateForm}
      >
        <Input
          label="Email"
          name="email"
          data={data}
          error={errors.email}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          data={data}
          error={errors.password}
          onChange={handleChange}
        />
      </Form>
    </Container>
  );
}
