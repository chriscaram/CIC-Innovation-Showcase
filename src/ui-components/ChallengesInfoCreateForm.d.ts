/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ChallengesInfoCreateFormInputValues = {
    ProjectName?: string;
    ShortInfo?: string;
    Category?: string;
    Customer?: string;
    AWSServices?: string;
    ProjectPic?: string;
    ProjectInfoURL?: string;
    Highlight?: boolean;
    Demo?: string;
    github?: string;
    approach?: string;
    ProjectName_es?: string;
    Category_es?: string;
    approach_es?: string;
};
export declare type ChallengesInfoCreateFormValidationValues = {
    ProjectName?: ValidationFunction<string>;
    ShortInfo?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    Customer?: ValidationFunction<string>;
    AWSServices?: ValidationFunction<string>;
    ProjectPic?: ValidationFunction<string>;
    ProjectInfoURL?: ValidationFunction<string>;
    Highlight?: ValidationFunction<boolean>;
    Demo?: ValidationFunction<string>;
    github?: ValidationFunction<string>;
    approach?: ValidationFunction<string>;
    ProjectName_es?: ValidationFunction<string>;
    Category_es?: ValidationFunction<string>;
    approach_es?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChallengesInfoCreateFormOverridesProps = {
    ChallengesInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
    ShortInfo?: PrimitiveOverrideProps<TextFieldProps>;
    Category?: PrimitiveOverrideProps<TextFieldProps>;
    Customer?: PrimitiveOverrideProps<TextFieldProps>;
    AWSServices?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectPic?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectInfoURL?: PrimitiveOverrideProps<TextFieldProps>;
    Highlight?: PrimitiveOverrideProps<SwitchFieldProps>;
    Demo?: PrimitiveOverrideProps<TextFieldProps>;
    github?: PrimitiveOverrideProps<TextFieldProps>;
    approach?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectName_es?: PrimitiveOverrideProps<TextFieldProps>;
    Category_es?: PrimitiveOverrideProps<TextFieldProps>;
    approach_es?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChallengesInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: ChallengesInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChallengesInfoCreateFormInputValues) => ChallengesInfoCreateFormInputValues;
    onSuccess?: (fields: ChallengesInfoCreateFormInputValues) => void;
    onError?: (fields: ChallengesInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChallengesInfoCreateFormInputValues) => ChallengesInfoCreateFormInputValues;
    onValidate?: ChallengesInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChallengesInfoCreateForm(props: ChallengesInfoCreateFormProps): React.ReactElement;
