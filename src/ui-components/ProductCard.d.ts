/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, ButtonProps, DividerProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ProductCardOverridesProps = {
    ProductCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Accessing scientific equipment"?: PrimitiveOverrideProps<TextProps>;
    Divider20291157?: PrimitiveOverrideProps<DividerProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "ASU university technology office (UTO)"?: PrimitiveOverrideProps<TextProps>;
    Quote?: PrimitiveOverrideProps<FlexProps>;
    "Scientific discoveries drive the world we live in and can provide breakthroughs that can vastly improve our knowledge of our world and people\u2019s livelihood. However, much of the scientific equipment that proves useful to make such discoveries is cost prohibitive. The Science Instrument Reservation and Access System or (SIRAS) allows researchers and scientists to access expensive equipment and provides them with remote access and the ability to make reservations to use such equipment."?: PrimitiveOverrideProps<TextProps>;
    Divider20291153?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<FlexProps>;
    Button20291127?: PrimitiveOverrideProps<ButtonProps>;
    Button20291134?: PrimitiveOverrideProps<ButtonProps>;
    Button20291138?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProductCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    challengesInfo?: any;
} & {
    overrides?: ProductCardOverridesProps | undefined | null;
}>;
export default function ProductCard(props: ProductCardProps): React.ReactElement;
