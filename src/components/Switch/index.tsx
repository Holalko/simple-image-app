import { SwitchWrapper, LabelRow } from "./styled";
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
export function Switch({ label, ...props }: Props) {
  return (
    <LabelRow>
      <SwitchWrapper>
        <input type="checkbox" {...props} />
        <span className="slider round" />
      </SwitchWrapper>
      {label}
    </LabelRow>
  );
}
