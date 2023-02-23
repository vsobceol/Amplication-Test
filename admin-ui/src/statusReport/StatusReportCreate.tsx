import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const StatusReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
