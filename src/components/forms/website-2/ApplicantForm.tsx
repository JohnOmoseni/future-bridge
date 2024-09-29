import { useFormik } from "formik";
import { InferType } from "yup";
import { ApplicantFormSchema } from "@/schema";
import { toast } from "sonner";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import ApplicationFormWrapper from "./ApplicationFormWrapper";

export type FormProps = {
	step?: number;
	nextStep?: () => void;
	prevStep?: () => void;
};

const ApplicantForm = ({ step, nextStep }: FormProps) => {
	const onSubmit = async (values: InferType<typeof ApplicantFormSchema>) => {
		console.log("Form submitted", values);

		nextStep && nextStep();

		try {
		} catch (error) {
			toast.error("An error occured");
		}
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				name: "",
				schoolName: "",
				sex: "",
				yearOfGrad: "",
				dob: "",
				class: "",
			},
			validationSchema: ApplicantFormSchema,
			onSubmit,
		});

	const fields = [
		[
			{
				name: "name",
				label: "Name of applicant",
				value: values.name,
				placeholder: "e.g Tamar Guanah",
				required: true,
			},

			{
				name: "sex",
				label: "Sex",
				value: values.sex,
				placeholder: "e.g Male or female",
				required: true,
			},
			{
				name: "dob",
				label: "Date of birth",
				value: values.dob,
				placeholder: "DD/MM/YYYY",
			},
		],
		[
			{
				name: "schoolName",
				label: "Name of last school attended",
				value: values.schoolName,
				placeholder: "e.g Model high secondary school",
				required: true,
			},
			{
				name: "yearOfGrad",
				label: "Year obtained or will obtain first school leaving certificate",
				value: values.yearOfGrad,
				placeholder: "e.g Primary school or junior waec certificate",
				required: true,
			},

			{
				name: "class",
				label: "Present class",
				value: values.class,
				placeholder: "e.g JS. 1",
			},
		],
	];

	return (
		<ApplicationFormWrapper
			headerText="Applicant Information"
			nextStep={handleSubmit}
			step={step}
		>
			{fields?.map((row) => (
				<div
					className="sm:row-flex-start flex-column w-full gap-x-4 
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
						fieldType={FormFieldType.INPUT}
						name={row[1]?.name}
						label={row[1]?.label}
						field={{
							value: row[1]?.value,
							placeholder: row[1]?.placeholder,
						}}
						onChange={handleChange}
						onBlur={handleBlur}
						errors={errors}
						touched={touched}
						required
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

export default ApplicantForm;
