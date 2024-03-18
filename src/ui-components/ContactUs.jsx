/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, TextAreaField, TextField } from "@aws-amplify/ui-react";
export default function ContactUs(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="600px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ContactUs")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 428")}
      >
        <TextField
          width="260px"
          height="unset"
          label="First name"
          shrink="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField2041365")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Last name"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField2041372")}
        ></TextField>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        label="Email address"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField2041379")}
      ></TextField>
      <TextAreaField
        width="unset"
        height="unset"
        label="Message"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Send message"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
