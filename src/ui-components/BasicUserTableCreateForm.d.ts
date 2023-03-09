/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BasicUserTableCreateFormInputValues = {
    email?: string;
    profile_pic?: string;
    wallet_address?: string;
    username?: string;
};
export declare type BasicUserTableCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    profile_pic?: ValidationFunction<string>;
    wallet_address?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasicUserTableCreateFormOverridesProps = {
    BasicUserTableCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    profile_pic?: PrimitiveOverrideProps<TextFieldProps>;
    wallet_address?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BasicUserTableCreateFormProps = React.PropsWithChildren<{
    overrides?: BasicUserTableCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BasicUserTableCreateFormInputValues) => BasicUserTableCreateFormInputValues;
    onSuccess?: (fields: BasicUserTableCreateFormInputValues) => void;
    onError?: (fields: BasicUserTableCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasicUserTableCreateFormInputValues) => BasicUserTableCreateFormInputValues;
    onValidate?: BasicUserTableCreateFormValidationValues;
} & React.CSSProperties>;
export default function BasicUserTableCreateForm(props: BasicUserTableCreateFormProps): React.ReactElement;
