/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type ContactInfoOverridesProps = {
    ContactInfo?: PrimitiveOverrideProps<FlexProps>;
    "Contact us"?: PrimitiveOverrideProps<TextProps>;
    "Email, call or fill this form to learn how we can solve your problem."?: PrimitiveOverrideProps<TextProps>;
    "Frame 4378"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon20381124?: MyIconProps;
    Adress?: PrimitiveOverrideProps<TextProps>;
    "SkySong1475 N. Scottsdale Road, Building 1 Suite 120Scottsdale, AZ 85257-3538"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4379"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon20381697?: MyIconProps;
    Email?: PrimitiveOverrideProps<TextProps>;
    "cic-dev@aws.com"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContactInfoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactInfoOverridesProps | undefined | null;
}>;
export default function ContactInfo(props: ContactInfoProps): React.ReactElement;
