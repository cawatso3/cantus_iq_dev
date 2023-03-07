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
export declare type DefaultUserTableCreateFormInputValues = {
    profile_img?: string;
    username?: string;
    email?: string;
};
export declare type DefaultUserTableCreateFormValidationValues = {
    profile_img?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DefaultUserTableCreateFormOverridesProps = {
    DefaultUserTableCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    profile_img?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DefaultUserTableCreateFormProps = React.PropsWithChildren<{
    overrides?: DefaultUserTableCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DefaultUserTableCreateFormInputValues) => DefaultUserTableCreateFormInputValues;
    onSuccess?: (fields: DefaultUserTableCreateFormInputValues) => void;
    onError?: (fields: DefaultUserTableCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DefaultUserTableCreateFormInputValues) => DefaultUserTableCreateFormInputValues;
    onValidate?: DefaultUserTableCreateFormValidationValues;
} & React.CSSProperties>;
export default function DefaultUserTableCreateForm(props: DefaultUserTableCreateFormProps): React.ReactElement;
