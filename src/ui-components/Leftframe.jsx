/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function Leftframe(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="620px"
      height="500px"
      justifyContent="space-between"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="50px 20px 50px 20px"
      {...getOverrideProps(overrides, "Leftframe")}
      {...rest}
    >
      <Divider
        width="unset"
        height="1px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider20151287")}
      ></Divider>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 10")}
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
          children="Recent Projects"
          {...getOverrideProps(overrides, "Recent Projects")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          textTransform="uppercase"
          lineHeight="50px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Addressing community challenges with technology"
          {...getOverrideProps(
            overrides,
            "Addressing community challenges with technology"
          )}
        ></Text>
      </Flex>
      <Divider
        width="unset"
        height="1px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider20151291")}
      ></Divider>
    </Flex>
  );
}
