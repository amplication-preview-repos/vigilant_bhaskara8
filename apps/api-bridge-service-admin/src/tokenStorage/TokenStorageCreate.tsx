import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const TokenStorageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="expiry" source="expiry" />
        <TextInput label="serviceName" source="serviceName" />
        <TextInput label="token" source="token" />
      </SimpleForm>
    </Create>
  );
};
