/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { BasicUserTable } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BasicUserTableUpdateForm(props) {
  const {
    id: idProp,
    basicUserTable,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    profile_pic: "",
    wallet_address: "",
    username: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [profile_pic, setProfile_pic] = React.useState(
    initialValues.profile_pic
  );
  const [wallet_address, setWallet_address] = React.useState(
    initialValues.wallet_address
  );
  const [username, setUsername] = React.useState(initialValues.username);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = basicUserTableRecord
      ? { ...initialValues, ...basicUserTableRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setProfile_pic(cleanValues.profile_pic);
    setWallet_address(cleanValues.wallet_address);
    setUsername(cleanValues.username);
    setErrors({});
  };
  const [basicUserTableRecord, setBasicUserTableRecord] =
    React.useState(basicUserTable);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(BasicUserTable, idProp)
        : basicUserTable;
      setBasicUserTableRecord(record);
    };
    queryData();
  }, [idProp, basicUserTable]);
  React.useEffect(resetStateValues, [basicUserTableRecord]);
  const validations = {
    email: [],
    profile_pic: [],
    wallet_address: [],
    username: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
          email,
          profile_pic,
          wallet_address,
          username,
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
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            BasicUserTable.copyOf(basicUserTableRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BasicUserTableUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              profile_pic,
              wallet_address,
              username,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Profile pic"
        isRequired={false}
        isReadOnly={false}
        value={profile_pic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              profile_pic: value,
              wallet_address,
              username,
            };
            const result = onChange(modelFields);
            value = result?.profile_pic ?? value;
          }
          if (errors.profile_pic?.hasError) {
            runValidationTasks("profile_pic", value);
          }
          setProfile_pic(value);
        }}
        onBlur={() => runValidationTasks("profile_pic", profile_pic)}
        errorMessage={errors.profile_pic?.errorMessage}
        hasError={errors.profile_pic?.hasError}
        {...getOverrideProps(overrides, "profile_pic")}
      ></TextField>
      <TextField
        label="Wallet address"
        isRequired={false}
        isReadOnly={false}
        value={wallet_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              profile_pic,
              wallet_address: value,
              username,
            };
            const result = onChange(modelFields);
            value = result?.wallet_address ?? value;
          }
          if (errors.wallet_address?.hasError) {
            runValidationTasks("wallet_address", value);
          }
          setWallet_address(value);
        }}
        onBlur={() => runValidationTasks("wallet_address", wallet_address)}
        errorMessage={errors.wallet_address?.errorMessage}
        hasError={errors.wallet_address?.hasError}
        {...getOverrideProps(overrides, "wallet_address")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              profile_pic,
              wallet_address,
              username: value,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
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
          isDisabled={!(idProp || basicUserTable)}
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
              !(idProp || basicUserTable) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
