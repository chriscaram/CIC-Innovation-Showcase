/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ProductCard(props) {
  const { challengesInfo, overrides, ...rest } = props;
  const buttonTwoZeroTwoNineOneOneTwoSevenOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: challengesInfo?.github,
  });
  const buttonTwoZeroTwoNineOneOneThreeFourOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: challengesInfo?.ProjectInfoURL,
  });
  const buttonTwoZeroTwoNineOneOneThreeEightOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: challengesInfo?.Demo,
  });
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProductCard")}
      {...rest}
    >
      <Image
        width="320px"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={challengesInfo?.ProjectPic}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="576px"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 435")}
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
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          textTransform="uppercase"
          lineHeight="25px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={challengesInfo?.ProjectName}
          {...getOverrideProps(overrides, "Accessing scientific equipment")}
        ></Text>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider20291157")}
        ></Divider>
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          variation="default"
          defaultValue={challengesInfo?.Category}
          children="Education"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
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
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={challengesInfo?.Customer}
          {...getOverrideProps(
            overrides,
            "ASU university technology office (UTO)"
          )}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Quote")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
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
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={challengesInfo?.approach}
            {...getOverrideProps(
              overrides,
              "Scientific discoveries drive the world we live in and can provide breakthroughs that can vastly improve our knowledge of our world and people\u2019s livelihood. However, much of the scientific equipment that proves useful to make such discoveries is cost prohibitive. The Science Instrument Reservation and Access System or (SIRAS) allows researchers and scientists to access expensive equipment and provides them with remote access and the ability to make reservations to use such equipment."
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
          {...getOverrideProps(overrides, "Divider20291153")}
        ></Divider>
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="GitHub"
            onClick={() => {
              buttonTwoZeroTwoNineOneOneTwoSevenOnClick();
            }}
            {...getOverrideProps(overrides, "Button20291127")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="ProjectURL"
            onClick={() => {
              buttonTwoZeroTwoNineOneOneThreeFourOnClick();
            }}
            {...getOverrideProps(overrides, "Button20291134")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="link"
            children="Demo/YouTube"
            onClick={() => {
              buttonTwoZeroTwoNineOneOneThreeEightOnClick();
            }}
            {...getOverrideProps(overrides, "Button20291138")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
