/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DefaultUserTable } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DefaultUserTableUpdateFormInputValues = {
    profile_pic?: string;
    username?: string;
    email?: string;
    walletAddress?: string;
};
export declare type DefaultUserTableUpdateFormValidationValues = {
    profile_pic?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    walletAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DefaultUserTableUpdateFormOverridesProps = {
    DefaultUserTableUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    profile_pic?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    walletAddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DefaultUserTableUpdateFormProps = React.PropsWithChildren<{
    overrides?: DefaultUserTableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    defaultUserTable?: DefaultUserTable;
    onSubmit?: (fields: DefaultUserTableUpdateFormInputValues) => DefaultUserTableUpdateFormInputValues;
    onSuccess?: (fields: DefaultUserTableUpdateFormInputValues) => void;
    onError?: (fields: DefaultUserTableUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DefaultUserTableUpdateFormInputValues) => DefaultUserTableUpdateFormInputValues;
    onValidate?: DefaultUserTableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DefaultUserTableUpdateForm(props: DefaultUserTableUpdateFormProps): React.ReactElement;
