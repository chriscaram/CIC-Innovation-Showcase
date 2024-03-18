/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function ProjectCategory(props) {
  const { challengesInfo, overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="20px 50px 20px 50px"
      {...getOverrideProps(overrides, "ProjectCategory")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        textTransform="uppercase"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={challengesInfo?.Category}
        {...getOverrideProps(overrides, "Gen-Ai Projects")}
      ></Text>
      <Divider
        width="unset"
        height="1px"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
