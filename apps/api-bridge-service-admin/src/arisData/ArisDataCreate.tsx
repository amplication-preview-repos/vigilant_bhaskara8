import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ArisDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="attributeName" source="attributeName" />
        <TextInput label="attributeValue" source="attributeValue" />
        <DateTimeInput label="lastSynced" source="lastSynced" />
      </SimpleForm>
    </Create>
  );
};
