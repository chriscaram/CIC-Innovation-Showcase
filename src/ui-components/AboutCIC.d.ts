/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type AboutCICOverridesProps = {
    AboutCIC?: PrimitiveOverrideProps<FlexProps>;
    Leftframe?: PrimitiveOverrideProps<FlexProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    "Our Amazing Team"?: PrimitiveOverrideProps<TextProps>;
    "Build full-stack web and mobile apps in hours. Easy to start, easy to scale"?: PrimitiveOverrideProps<TextProps>;
    "AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed."?: PrimitiveOverrideProps<TextProps>;
    Rightframe?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type AboutCICProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: AboutCICOverridesProps | undefined | null;
}>;
export default function AboutCIC(props: AboutCICProps): React.ReactElement;
