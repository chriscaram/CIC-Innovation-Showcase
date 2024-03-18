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
export declare type LeftframeOverridesProps = {
    Leftframe?: PrimitiveOverrideProps<FlexProps>;
    Divider20151287?: PrimitiveOverrideProps<DividerProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    "Recent Projects"?: PrimitiveOverrideProps<TextProps>;
    "Addressing community challenges with technology"?: PrimitiveOverrideProps<TextProps>;
    Divider20151291?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type LeftframeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LeftframeOverridesProps | undefined | null;
}>;
export default function Leftframe(props: LeftframeProps): React.ReactElement;
