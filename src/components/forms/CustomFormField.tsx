import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { FormikErrors, FormikTouched } from "formik";
import { FocusEventHandler, KeyboardEventHandler, useState } from "react";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import PhoneInput from "react-phone-number-input";

export enum FormFieldType {
	INPUT = "input",
	TEXTAREA = "textarea",
	PHONE_INPUT = "phoneInput",
	CHECKBOX = "checkbox",
	SELECT = "select",
	SKELETON = "skeleton",
}

interface CustomProps {
	name: string;
	field?: {
		value: any;
		type?: string;
		placeholder?: string;
	};
	isShowPasswordError?: boolean;
	containerStyles?: string;
	fieldType: FormFieldType;
	label?: string;
	iconSrc?: any;
	dir?: "left" | "right";
	disabled?: boolean;
	children?: React.ReactNode;
	errors?: FormikErrors<any>;
	touched?: FormikTouched<any>;
	required?: boolean;
	renderSkeleton?: (field: any) => React.ReactNode;
	onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	onChange?: any;
	onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const RenderInput = ({ props }: { props: CustomProps }) => {
	const [showPassword, setShowPassword] = useState(false);
	const { field, fieldType, name, onBlur, onChange } = props;
	const placeholder = field?.placeholder ?? "";

	const changePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	switch (fieldType) {
		case FormFieldType.INPUT:
			return (
				<>
					<Input
						placeholder={placeholder}
						name={name}
						{...field}
						{...(field?.type === "password" && {
							type: showPassword ? "text" : "password",
						})}
						value={field?.value as string}
						onChange={onChange}
						onBlur={onBlur}
						className={cn(
							"i-reset",
							field?.type === "password" && "text-[1.2rem]"
						)}
					/>

					{field?.type === "password" && (
						<span
							className="icon absolute right-3 z-10"
							onClick={changePasswordVisibility}
						>
							{/* {showPassword ? (
                <Eye size={22} className="text-secondary" />
              ) : (
                <EyeOff size={22} className="text-secondary" />
              )} */}
						</span>
					)}
				</>
			);

		case FormFieldType.TEXTAREA:
			return (
				<Textarea
					placeholder={placeholder}
					name={name}
					{...field}
					value={field?.value as string}
					onChange={onChange}
					onBlur={onBlur}
					className="resize-none i-reset"
				/>
			);

		case FormFieldType.SELECT:
			return (
				<div>
					<Select
						onValueChange={onChange}
						defaultValue={field?.value as string}
					>
						<SelectTrigger className="shad-select-trigger">
							<SelectValue placeholder={placeholder || "Select"} />
						</SelectTrigger>
						<SelectContent className="shad-select-content">
							{props.children}
						</SelectContent>
					</Select>
				</div>
			);

		case FormFieldType.PHONE_INPUT:
			return (
				<PhoneInput
					name="phone"
					id="phone"
					placeholder={placeholder}
					international
					withCountryCallingCode
					defaultCountry="NG"
					value={field?.value}
					onChange={onChange}
					className="input-phone"
				/>
			);
		case FormFieldType.SKELETON:
			return props.renderSkeleton ? props.renderSkeleton(field) : null;
		default:
			return null;
	}
};

const CustomFormField = (props: CustomProps) => {
	const {
		name,
		label,
		field,
		errors,
		touched,
		fieldType,
		containerStyles,
		isShowPasswordError,
	} = props;

	const result = ![FormFieldType.SKELETON].includes(fieldType) ? (
		<div
			className={cn(
				"row-flex-start relative w-full gap-0.5 overflow-hidden rounded-lg border border-border bg-background shadow-sm",
				containerStyles,
				errors?.[name] && touched?.[name] && "border-red-400"
			)}
		>
			<RenderInput props={props} />
		</div>
	) : (
		<>
			<RenderInput props={props} />
		</>
	);

	return (
		<div
			className={cn(
				"group w-full",
				errors?.[name] && touched?.[name] ? "is-error" : ""
			)}
		>
			{label && (
				<Label className="relative mb-1.5 ml-0.5 inline-flex after:absolute after:-right-6 after:top-0 after:text-sm after:text-red-500 after:content-[*]">
					{label}
				</Label>
			)}
			{result}

			{field?.type !== "password" && (
				<p
					className={cn(
						"transition-sm invisible my-1.5 ml-0.5 line-clamp-2 h-0 text-xs font-semibold leading-4 text-red-500 group-[.is-error]:visible group-[.is-error]:h-auto group-[.is-error]:animate-in",
						isShowPasswordError && "md:min-h-5"
					)}
				>
					{errors?.[name] as string}
				</p>
			)}
		</div>
	);
};

export default CustomFormField;
