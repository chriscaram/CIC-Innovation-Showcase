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
export declare type ChallengesInfoUpdateFormInputValues = {
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
    AIBackgroundImage?: string;
};
export declare type ChallengesInfoUpdateFormValidationValues = {
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
    AIBackgroundImage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChallengesInfoUpdateFormOverridesProps = {
    ChallengesInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    AIBackgroundImage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChallengesInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChallengesInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    challengesInfo?: any;
    onSubmit?: (fields: ChallengesInfoUpdateFormInputValues) => ChallengesInfoUpdateFormInputValues;
    onSuccess?: (fields: ChallengesInfoUpdateFormInputValues) => void;
    onError?: (fields: ChallengesInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChallengesInfoUpdateFormInputValues) => ChallengesInfoUpdateFormInputValues;
    onValidate?: ChallengesInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChallengesInfoUpdateForm(props: ChallengesInfoUpdateFormProps): React.ReactElement;
