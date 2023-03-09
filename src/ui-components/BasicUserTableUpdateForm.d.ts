/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BasicUserTable } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BasicUserTableUpdateFormInputValues = {
    email?: string;
    profile_pic?: string;
    wallet_address?: string;
    username?: string;
};
export declare type BasicUserTableUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    profile_pic?: ValidationFunction<string>;
    wallet_address?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasicUserTableUpdateFormOverridesProps = {
    BasicUserTableUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    profile_pic?: PrimitiveOverrideProps<TextFieldProps>;
    wallet_address?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BasicUserTableUpdateFormProps = React.PropsWithChildren<{
    overrides?: BasicUserTableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    basicUserTable?: BasicUserTable;
    onSubmit?: (fields: BasicUserTableUpdateFormInputValues) => BasicUserTableUpdateFormInputValues;
    onSuccess?: (fields: BasicUserTableUpdateFormInputValues) => void;
    onError?: (fields: BasicUserTableUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasicUserTableUpdateFormInputValues) => BasicUserTableUpdateFormInputValues;
    onValidate?: BasicUserTableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BasicUserTableUpdateForm(props: BasicUserTableUpdateFormProps): React.ReactElement;
