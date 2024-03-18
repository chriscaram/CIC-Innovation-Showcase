/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type WhoAreWeOverridesProps = {
    WhoAreWe?: PrimitiveOverrideProps<FlexProps>;
    "Who are we?"?: PrimitiveOverrideProps<TextProps>;
    "ASU's Artificial Intelligence Cloud Innovation Center, powered by AWS"?: PrimitiveOverrideProps<TextProps>;
    "Also known as the AI CIC, the ASU Artificial Intelligence Cloud Innovation Center, powered by AWS, harnesses the capabilities of artificial intelligence (AI) to help global government agencies, education institutions, and nonprofits address mission-related challenges."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type WhoAreWeProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: WhoAreWeOverridesProps | undefined | null;
}>;
export default function WhoAreWe(props: WhoAreWeProps): React.ReactElement;
