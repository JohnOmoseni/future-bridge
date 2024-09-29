import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "sonner";
import { FormProps } from "./ApplicantForm";
import FileUpload from "./FileUpload";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import ApplicationFormWrapper from "./ApplicationFormWrapper";

import "react-phone-number-input/style.css";

const DocumentForm = ({ step, nextStep, prevStep }: FormProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (values: any) => {
		setIsLoading(true);
		console.log("Form submitted", values);

		nextStep && nextStep();

		try {
		} catch (error) {
			toast.error("An error occured");
		} finally {
			setIsLoading(false);
		}
	};

	const { errors, touched, setFieldValue, handleBlur, handleSubmit } =
		useFormik({
			initialValues: {},
			validationSchema: null,
			onSubmit,
		});

	return (
		<ApplicationFormWrapper
			headerText="Document Upload"
			onSubmit={handleSubmit}
			isSubmitting={isLoading}
			prevStep={prevStep}
			step={step}
		>
			<div className="flex-column sm:grid grid-cols-2 w-full gap-4">
				<CustomFormField
					fieldType={FormFieldType.SKELETON}
					name="passport_upload"
					errors={errors}
					onBlur={handleBlur}
					touched={touched}
					renderSkeleton={() => (
						<FileUpload
							title="Upload Passport"
							name="passport_upload"
							required
							onFileChange={(file) => {
								setFieldValue("identificationDocument", file);
							}}
						/>
					)}
				/>

				<CustomFormField
					fieldType={FormFieldType.SKELETON}
					name="payment_receipt_upload"
					errors={errors}
					onBlur={handleBlur}
					touched={touched}
					renderSkeleton={() => (
						<FileUpload
							title="Upload Proof of Payment"
							name="payment_receipt_upload"
							required
							onFileChange={(file) => {
								setFieldValue("payment_receipt_upload", file);
							}}
						/>
					)}
				/>
			</div>

			<CustomFormField
				fieldType={FormFieldType.SKELETON}
				name="certificate_upload"
				errors={errors}
				renderSkeleton={() => (
					<FileUpload
						title="Upload Testimonial or First school leaving certificate (if available)"
						name="certificate_upload"
						required
						onFileChange={(file) => {
							setFieldValue("certificate_upload", file);
						}}
					/>
				)}
			/>

			<CustomFormField
				fieldType={FormFieldType.SKELETON}
				name="birth_certificate_upload"
				errors={errors}
				onBlur={handleBlur}
				touched={touched}
				renderSkeleton={() => (
					<FileUpload
						title="Upload Birth Certificate"
						name="birth_certificate_upload"
						onFileChange={(file) => {
							setFieldValue("birth_certificate_upload", file);
						}}
					/>
				)}
			/>
		</ApplicationFormWrapper>
	);
};

export default DocumentForm;
