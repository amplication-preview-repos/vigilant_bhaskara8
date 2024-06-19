import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CmdbDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="itemDetails" multiline source="itemDetails" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
      </SimpleForm>
    </Create>
  );
};
