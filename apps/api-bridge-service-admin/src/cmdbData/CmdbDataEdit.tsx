import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CmdbDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="itemDetails" multiline source="itemDetails" />
        <TextInput label="itemName" source="itemName" />
        <DateTimeInput label="lastUpdated" source="lastUpdated" />
      </SimpleForm>
    </Edit>
  );
};
