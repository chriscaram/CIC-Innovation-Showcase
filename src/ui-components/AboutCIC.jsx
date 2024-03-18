/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function AboutCIC(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="456px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "AboutCIC")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="50px 20px 50px 20px"
        {...getOverrideProps(overrides, "Leftframe")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="556px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
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
            children="Our Amazing Team"
            {...getOverrideProps(overrides, "Our Amazing Team")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(0,0,0,1)"
            textTransform="uppercase"
            lineHeight="25px"
            textAlign="left"
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
            children="Build full-stack web and mobile apps in hours. Easy to start, easy to scale"
            {...getOverrideProps(
              overrides,
              "Build full-stack web and mobile apps in hours. Easy to start, easy to scale"
            )}
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
            width="479px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed."
            {...getOverrideProps(
              overrides,
              "AWS Amplify is a complete solution that lets frontend web and mobile developers easily build, ship, and host full-stack applications on AWS, with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise needed."
            )}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="720px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="20px 50px 20px 50px"
        {...getOverrideProps(overrides, "Rightframe")}
      >
        <Image
          width="550px"
          height="392px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://main.d3m7vi17aoql8d.amplifyapp.com/static/media/CIC.f4cbe38d8e918488578e.jpg"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></Image>
      </Flex>
    </Flex>
  );
}
