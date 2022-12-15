import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { Group, FormInputLabel, Input } from "./form-input.styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElHtmlHTMLAttributesement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          className={`${otherProps.value.length ? "shrink" : ""
            } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
