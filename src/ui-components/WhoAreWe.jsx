/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function WhoAreWe(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      {...getOverrideProps(overrides, "WhoAreWe")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="200"
        color="rgba(0,0,0,1)"
        textTransform="uppercase"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Who are we?"
        {...getOverrideProps(overrides, "Who are we?")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        textTransform="uppercase"
        lineHeight="25px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="491px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ASU's Artificial Intelligence Cloud Innovation Center, powered by AWS"
        {...getOverrideProps(
          overrides,
          "ASU's Artificial Intelligence Cloud Innovation Center, powered by AWS"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="479px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Also known as the AI CIC, the ASU Artificial Intelligence Cloud Innovation Center, powered by AWS, harnesses the capabilities of artificial intelligence (AI) to help global government agencies, education institutions, and nonprofits address mission-related challenges."
        {...getOverrideProps(
          overrides,
          "Also known as the AI CIC, the ASU Artificial Intelligence Cloud Innovation Center, powered by AWS, harnesses the capabilities of artificial intelligence (AI) to help global government agencies, education institutions, and nonprofits address mission-related challenges."
        )}
      ></Text>
    </Flex>
  );
}
