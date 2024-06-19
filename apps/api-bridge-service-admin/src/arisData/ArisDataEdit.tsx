import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ArisDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="attributeName" source="attributeName" />
        <TextInput label="attributeValue" source="attributeValue" />
        <DateTimeInput label="lastSynced" source="lastSynced" />
      </SimpleForm>
    </Edit>
  );
};
