/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getDemoShowCaseInfo } from "../graphql/queries";
import { updateDemoShowCaseInfo } from "../graphql/mutations";
const client = generateClient();
export default function DemoShowCaseInfoUpdateForm(props) {
  const {
    id: idProp,
    demoShowCaseInfo: demoShowCaseInfoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ProjectName: "",
    ProjectInfo: "",
    ProjectImage: "",
    ProjectVideoDemo: "",
  };
  const [ProjectName, setProjectName] = React.useState(
    initialValues.ProjectName
  );
  const [ProjectInfo, setProjectInfo] = React.useState(
    initialValues.ProjectInfo
  );
  const [ProjectImage, setProjectImage] = React.useState(
    initialValues.ProjectImage
  );
  const [ProjectVideoDemo, setProjectVideoDemo] = React.useState(
    initialValues.ProjectVideoDemo
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = demoShowCaseInfoRecord
      ? { ...initialValues, ...demoShowCaseInfoRecord }
      : initialValues;
    setProjectName(cleanValues.ProjectName);
    setProjectInfo(cleanValues.ProjectInfo);
    setProjectImage(cleanValues.ProjectImage);
    setProjectVideoDemo(cleanValues.ProjectVideoDemo);
    setErrors({});
  };
  const [demoShowCaseInfoRecord, setDemoShowCaseInfoRecord] = React.useState(
    demoShowCaseInfoModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDemoShowCaseInfo.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDemoShowCaseInfo
        : demoShowCaseInfoModelProp;
      setDemoShowCaseInfoRecord(record);
    };
    queryData();
  }, [idProp, demoShowCaseInfoModelProp]);
  React.useEffect(resetStateValues, [demoShowCaseInfoRecord]);
  const validations = {
    ProjectName: [],
    ProjectInfo: [],
    ProjectImage: [],
    ProjectVideoDemo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ProjectName: ProjectName ?? null,
          ProjectInfo: ProjectInfo ?? null,
          ProjectImage: ProjectImage ?? null,
          ProjectVideoDemo: ProjectVideoDemo ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateDemoShowCaseInfo.replaceAll("__typename", ""),
            variables: {
              input: {
                id: demoShowCaseInfoRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DemoShowCaseInfoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Project name"
        isRequired={false}
        isReadOnly={false}
        value={ProjectName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName: value,
              ProjectInfo,
              ProjectImage,
              ProjectVideoDemo,
            };
            const result = onChange(modelFields);
            value = result?.ProjectName ?? value;
          }
          if (errors.ProjectName?.hasError) {
            runValidationTasks("ProjectName", value);
          }
          setProjectName(value);
        }}
        onBlur={() => runValidationTasks("ProjectName", ProjectName)}
        errorMessage={errors.ProjectName?.errorMessage}
        hasError={errors.ProjectName?.hasError}
        {...getOverrideProps(overrides, "ProjectName")}
      ></TextField>
      <TextField
        label="Project info"
        isRequired={false}
        isReadOnly={false}
        value={ProjectInfo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectInfo: value,
              ProjectImage,
              ProjectVideoDemo,
            };
            const result = onChange(modelFields);
            value = result?.ProjectInfo ?? value;
          }
          if (errors.ProjectInfo?.hasError) {
            runValidationTasks("ProjectInfo", value);
          }
          setProjectInfo(value);
        }}
        onBlur={() => runValidationTasks("ProjectInfo", ProjectInfo)}
        errorMessage={errors.ProjectInfo?.errorMessage}
        hasError={errors.ProjectInfo?.hasError}
        {...getOverrideProps(overrides, "ProjectInfo")}
      ></TextField>
      <TextField
        label="Project image"
        isRequired={false}
        isReadOnly={false}
        value={ProjectImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectInfo,
              ProjectImage: value,
              ProjectVideoDemo,
            };
            const result = onChange(modelFields);
            value = result?.ProjectImage ?? value;
          }
          if (errors.ProjectImage?.hasError) {
            runValidationTasks("ProjectImage", value);
          }
          setProjectImage(value);
        }}
        onBlur={() => runValidationTasks("ProjectImage", ProjectImage)}
        errorMessage={errors.ProjectImage?.errorMessage}
        hasError={errors.ProjectImage?.hasError}
        {...getOverrideProps(overrides, "ProjectImage")}
      ></TextField>
      <TextField
        label="Project video demo"
        isRequired={false}
        isReadOnly={false}
        value={ProjectVideoDemo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ProjectName,
              ProjectInfo,
              ProjectImage,
              ProjectVideoDemo: value,
            };
            const result = onChange(modelFields);
            value = result?.ProjectVideoDemo ?? value;
          }
          if (errors.ProjectVideoDemo?.hasError) {
            runValidationTasks("ProjectVideoDemo", value);
          }
          setProjectVideoDemo(value);
        }}
        onBlur={() => runValidationTasks("ProjectVideoDemo", ProjectVideoDemo)}
        errorMessage={errors.ProjectVideoDemo?.errorMessage}
        hasError={errors.ProjectVideoDemo?.hasError}
        {...getOverrideProps(overrides, "ProjectVideoDemo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || demoShowCaseInfoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || demoShowCaseInfoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
