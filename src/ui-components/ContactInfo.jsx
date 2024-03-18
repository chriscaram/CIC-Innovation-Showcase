/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ContactInfo(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="column"
      width="646px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ContactInfo")}
      {...rest}
    >
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
        width="491px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Contact us"
        {...getOverrideProps(overrides, "Contact us")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="231px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Email, call or fill this form to learn how we can solve your problem."
        {...getOverrideProps(
          overrides,
          "Email, call or fill this form to learn how we can solve your problem."
        )}
      ></Text>
      <Flex
        gap="16px"
        direction="row"
        width="416px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 4378")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="location"
          {...getOverrideProps(overrides, "MyIcon20381124")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
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
          children="Adress"
          {...getOverrideProps(overrides, "Adress")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="14.40000057220459px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="246px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="SkySong1475 N. Scottsdale Road, Building 1 Suite 120Scottsdale, AZ 85257-3538"
          {...getOverrideProps(
            overrides,
            "SkySong1475 N. Scottsdale Road, Building 1 Suite 120Scottsdale, AZ 85257-3538"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="416px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 4379")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="email"
          {...getOverrideProps(overrides, "MyIcon20381697")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
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
          children="Email"
          {...getOverrideProps(overrides, "Email")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="14.40000057220459px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="246px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="cic-dev@aws.com"
          {...getOverrideProps(overrides, "cic-dev@aws.com")}
        ></Text>
      </Flex>
    </Flex>
  );
}
