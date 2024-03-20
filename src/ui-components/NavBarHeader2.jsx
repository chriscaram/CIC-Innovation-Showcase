/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function NavBarHeader2(props) {
  const { overrides, ...rest } = props;
  const aSUlogoOneOnClick = useNavigateAction({ type: "url", url: "/" });
  const smartcitycloudinnovationcentersolutionshowcaseOnClick =
    useNavigateAction({ type: "url", url: "/" });
  const buttonSevenEightSevenThreeOnClick = useNavigateAction({
    type: "url",
    url: "/about",
  });
  const buttonSevenEightEightNineOnClick = useNavigateAction({
    type: "url",
    url: "/contact",
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="16px 32px 16px 32px"
      {...getOverrideProps(overrides, "NavBarHeader2")}
      {...rest}
    >
      <Flex
        gap="50px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Image
          width="52px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src="https://main.d3m7vi17aoql8d.amplifyapp.com/static/media/ASUlogo.c2bec8dd8bebf30225cd.png"
          onClick={() => {
            aSUlogoOneOnClick();
          }}
          {...getOverrideProps(overrides, "ASUlogo 1")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          textTransform="uppercase"
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
          children="Smart city cloud innovation center&#xA;solution showcase"
          onClick={() => {
            smartcitycloudinnovationcentersolutionshowcaseOnClick();
          }}
          {...getOverrideProps(
            overrides,
            "Smart city cloud innovation center solution showcase"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "actions")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="ABOUT"
          onClick={() => {
            buttonSevenEightSevenThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Button7873")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="CONTACT US"
          onClick={() => {
            buttonSevenEightEightNineOnClick();
          }}
          {...getOverrideProps(overrides, "Button7889")}
        ></Button>
      </Flex>
    </Flex>
  );
}
