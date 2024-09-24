import { useState } from "react";
import { useFormik } from "formik";
import { InferType } from "yup";
import { ParentApplicationFormSchema } from "@/schema";
import { Value } from "react-phone-number-input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import CustomFormField, { FormFieldType } from "../CustomFormField";

import "react-phone-number-input/style.css";
import ApplicationFormWrapper from "./ApplicationFormWrapper";

const ParentForm = ({ user }: { user?: any }) => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async (
		values: InferType<typeof ParentApplicationFormSchema>
	) => {
		setIsLoading(true);
		console.log("Form submitted", values);

		try {
		} catch (error) {
			toast.error("An error occured");
		} finally {
			setIsLoading(false);
		}
	};

	const {
		values,
		errors,
		touched,
		setFieldValue,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			fatherName: "",
			motherName: "",
			guardianName: "",
			religion: "",
			spiritualLeaderName: "",
			placeOfWorship: "",
			phoneNumberOfFather: "",
			phoneNumberOfMother: "",
			phoneNumberOfGuardian: "",
			addressOfFather: "",
			addressOfMother: "",
			addressOfGuardian: "",
			addressOfPlaceOfWorship: "",
		},
		validationSchema: ParentApplicationFormSchema,
		onSubmit,
	});

	const fields = [
		[
			{
				name: "fatherName",
				label: "Name of parent (Father)",
				value: values.fatherName,
				placeholder: "e.g Mr Tamar Guanah",
				required: true,
			},
			{
				name: "phoneNumberOfFather",
				label: "Phone No",
				value: values.phoneNumberOfFather,
				placeholder: "",
				required: true,
			},
			{
				name: "addressOfFather",
				label: "Address",
				value: values.addressOfFather,
				placeholder: "e.g Mile two signal Barracks",
				required: true,
			},
		],
		[
			{
				name: "fatherName",
				label: "Name of parent (Father)",
				value: values.fatherName,
				placeholder: "e.g Mr Tamar Guanah",
				required: true,
			},
			{
				name: "phoneNumberOfFather",
				label: "Phone No",
				value: values.phoneNumberOfFather,
				placeholder: "",
				required: true,
			},
			{
				name: "addressOfFather",
				label: "Address",
				value: values.addressOfFather,
				placeholder: "e.g Mile two signal Barracks",
				required: true,
			},
		],
		[
			{
				name: "fatherName",
				label: "Name of parent (Father)",
				value: values.fatherName,
				placeholder: "e.g Mr Tamar Guanah",
				required: true,
			},
			{
				name: "phoneNumberOfFather",
				label: "Phone No",
				value: values.phoneNumberOfFather,
				placeholder: "",
				required: true,
			},
			{
				name: "addressOfFather",
				label: "Address",
				value: values.addressOfFather,
				placeholder: "e.g Mile two signal Barracks",
				required: true,
			},
		],
	];

	return (
		<ApplicationFormWrapper
			headerText="Parent/Guardian Information"
			onSubmit={handleSubmit}
			isSubmitting={isLoading}
		>
			{fields?.map((row) => (
				<div
					className="sm:row-flex-start flex-column w-full gap-x-3 
			gap-y-4"
				>
					<CustomFormField
						fieldType={FormFieldType.INPUT}
						name={row[0]?.name}
						label={row[0]?.label}
						field={{
							value: row[0]?.value,
							placeholder: row[0]?.placeholder,
						}}
						onChange={handleChange}
						onBlur={handleBlur}
						errors={errors}
						touched={touched}
						required
					/>

					<CustomFormField
						fieldType={FormFieldType.PHONE_INPUT}
						name={row[1]?.name}
						label={row[1]?.label}
						field={{ value: row[1]?.value }}
						onChange={(value: Value) => {
							setFieldValue(row[0]?.name, value);
						}}
						onBlur={handleBlur}
						errors={errors}
						touched={touched}
					/>

					<CustomFormField
						fieldType={FormFieldType.INPUT}
						name={row[2]?.name}
						label={row[2]?.label}
						field={{
							value: row[2]?.value,
							placeholder: row[2]?.placeholder,
						}}
						onChange={handleChange}
						onBlur={handleBlur}
						errors={errors}
						touched={touched}
						required
					/>
				</div>
			))}
		</ApplicationFormWrapper>
	);
};

export default ParentForm;
