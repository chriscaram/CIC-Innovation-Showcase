/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function MarketingFooterBrand(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="20px 40px 20px 40px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "MarketingFooterBrand")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 434")}
        >
          <Image
            width="100px"
            height="71px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://main.d3m7vi17aoql8d.amplifyapp.com/static/media/ciclogo.18345d8e762048567866.png"
            {...getOverrideProps(overrides, "ciclogo 1")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(102,112,133,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Smart City Cloud Innovation Center Project Showcase"
            {...getOverrideProps(
              overrides,
              "Smart City Cloud Innovation Center Project Showcase"
            )}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="400"
          color="rgba(102,112,133,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="© 2024 Smart City Cloud Innovation Center Project Showcase. All rights reserved."
          {...getOverrideProps(
            overrides,
            "\u00A9 2024 Smart City Cloud Innovation Center Project Showcase. All rights reserved."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
