import { useFormik } from "formik";
import { InferType } from "yup";
import { ParentApplicationFormSchema } from "@/schema";
import { Value } from "react-phone-number-input";
import { toast } from "sonner";
import { FormProps } from "./ApplicantForm";
import CustomFormField, { FormFieldType } from "../CustomFormField";

import ApplicationFormWrapper from "./ApplicationFormWrapper";
import "react-phone-number-input/style.css";

const ParentForm = ({ step, nextStep, prevStep }: FormProps) => {
	const onSubmit = async (
		values: InferType<typeof ParentApplicationFormSchema>
	) => {
		console.log("Form submitted", values);

		nextStep && nextStep();

		try {
		} catch (error) {
			toast.error("An error occured");
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

			phoneNumberOfFather: "",
			phoneNumberOfMother: "",
			phoneNumberOfGuardian: "",

			addressOfFather: "",
			addressOfMother: "",
			addressOfGuardian: "",
			addressOfPlaceOfWorship: "",

			religion: "",
			spiritualLeaderName: "",
			placeOfWorship: "",
		},
		validationSchema: ParentApplicationFormSchema,
		onSubmit,
	});

	const fields = [
		{
			name: "fatherName",
			label: "Name of parent (Father)",
			value: values.fatherName,
			placeholder: "e.g Mr Tamar Guanah",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "phoneNumberOfFather",
			label: "Phone No",
			value: values.phoneNumberOfFather,
			placeholder: "",
			required: true,
			type: FormFieldType.PHONE_INPUT,
		},
		{
			name: "addressOfFather",
			label: "Address",
			value: values.addressOfFather,
			placeholder: "e.g Mile two signal Barracks",
			required: true,
			type: FormFieldType.INPUT,
		},

		{
			name: "motherName",
			label: "Name of parent (Mother)",
			value: values.motherName,
			placeholder: "e.g Mrs Tamar Guanah",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "phoneNumberOfMother",
			label: "Phone No",
			value: values.phoneNumberOfMother,
			placeholder: "",
			required: true,
			type: FormFieldType.PHONE_INPUT,
		},
		{
			name: "addressOfFMother",
			label: "Address",
			value: values.addressOfMother,
			placeholder: "e.g Mile two signal Barracks",
			required: true,
			type: FormFieldType.INPUT,
		},

		{
			name: "guardianName",
			label: "Name of guardian (if other than parent)",
			value: values.guardianName,
			placeholder: "e.g Mr Tamar Guanah",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "phoneNumberOfGuardian",
			label: "Phone No",
			value: values.phoneNumberOfGuardian,
			placeholder: "",
			required: true,
			type: FormFieldType.PHONE_INPUT,
		},
		{
			name: "addressOfGuardian",
			label: "Address",
			value: values.addressOfGuardian,
			placeholder: "e.g Mile two signal Barracks",
			required: true,
			type: FormFieldType.INPUT,
		},

		{
			name: "religion",
			label: "Religion of parent",
			value: values.religion,
			placeholder: "e.g Christian/Muslim",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "placeOfWorship",
			label: "Denomination",
			value: values.placeOfWorship,
			placeholder: "e.g Pentecostal/Catholic",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "addressOfPlaceOfWorship",
			label: "Present Parish/Mosque",
			value: values.addressOfPlaceOfWorship,
			placeholder: "e.g Mile two signal Barracks",
			required: true,
			type: FormFieldType.INPUT,
		},
		{
			name: "spiritualLeaderName",
			label: "Name of Priest or Imam",
			value: values.spiritualLeaderName,
			placeholder: "e.g Father/Imam Tamar Guanah",
			required: true,
			type: FormFieldType.INPUT,
		},
	];

	return (
		<ApplicationFormWrapper
			headerText="Parent/Guardian Information"
			nextStep={handleSubmit}
			prevStep={prevStep}
			step={step}
		>
			<div className="flex-column sm:grid grid-cols-2 md:grid-cols-3 w-full gap-4 max-sm:gap-y-2">
				{fields?.map((row) => (
					<>
						{row.type === FormFieldType.INPUT && (
							<CustomFormField
								fieldType={FormFieldType.INPUT}
								name={row?.name}
								label={row?.label}
								field={{
									value: row?.value,
									placeholder: row?.placeholder,
								}}
								onChange={handleChange}
								onBlur={handleBlur}
								errors={errors}
								touched={touched}
								required
							/>
						)}

						{row.type === FormFieldType.PHONE_INPUT && (
							<CustomFormField
								fieldType={FormFieldType.PHONE_INPUT}
								name={row?.name}
								label={row?.label}
								field={{ value: row?.value }}
								onChange={(value: Value) => {
									setFieldValue(row?.name, value);
								}}
								onBlur={handleBlur}
								errors={errors}
								touched={touched}
							/>
						)}
					</>
				))}
			</div>
		</ApplicationFormWrapper>
	);
};

export default ParentForm;
