import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const TokenStorageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiry" source="expiry" />
        <TextInput label="serviceName" source="serviceName" />
        <TextInput label="token" source="token" />
      </SimpleForm>
    </Edit>
  );
};
