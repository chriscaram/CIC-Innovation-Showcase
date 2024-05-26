/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DemoShowCaseInfoCreateFormInputValues = {
    ProjectName?: string;
    ProjectInfo?: string;
    ProjectImage?: string;
    ProjectVideoDemo?: string;
};
export declare type DemoShowCaseInfoCreateFormValidationValues = {
    ProjectName?: ValidationFunction<string>;
    ProjectInfo?: ValidationFunction<string>;
    ProjectImage?: ValidationFunction<string>;
    ProjectVideoDemo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DemoShowCaseInfoCreateFormOverridesProps = {
    DemoShowCaseInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectInfo?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectImage?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectVideoDemo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DemoShowCaseInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: DemoShowCaseInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DemoShowCaseInfoCreateFormInputValues) => DemoShowCaseInfoCreateFormInputValues;
    onSuccess?: (fields: DemoShowCaseInfoCreateFormInputValues) => void;
    onError?: (fields: DemoShowCaseInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DemoShowCaseInfoCreateFormInputValues) => DemoShowCaseInfoCreateFormInputValues;
    onValidate?: DemoShowCaseInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function DemoShowCaseInfoCreateForm(props: DemoShowCaseInfoCreateFormProps): React.ReactElement;
