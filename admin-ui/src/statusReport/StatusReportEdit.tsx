import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const StatusReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Account"
          source="account"
          choices={[{ label: "Account", value: "Account" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Created By" source="createdBy" />
        <SelectArrayInput
          label="Projects"
          source="projects"
          choices={[{ label: "Project", value: "Project" }]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
