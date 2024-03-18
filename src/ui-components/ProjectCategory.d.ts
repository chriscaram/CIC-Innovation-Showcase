/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCategoryOverridesProps = {
    ProjectCategory?: PrimitiveOverrideProps<FlexProps>;
    "Gen-Ai Projects"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type ProjectCategoryProps = React.PropsWithChildren<Partial<FlexProps> & {
    challengesInfo?: any;
} & {
    overrides?: ProjectCategoryOverridesProps | undefined | null;
}>;
export default function ProjectCategory(props: ProjectCategoryProps): React.ReactElement;
