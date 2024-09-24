import { useState } from "react";
import { useFormik } from "formik";
import { InferType } from "yup";
import { ParentApplicationFormSchema } from "@/schema";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import ApplicationFormWrapper from "./ApplicationFormWrapper";

import "react-phone-number-input/style.css";
import FileUpload from "./FileUpload";

const DocumentForm = ({ user }: { user?: any }) => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const onSubmit = async (values: any) => {
		setIsLoading(true);

		try {
		} catch (error) {
			toast.error("An error occured");
		} finally {
			setIsLoading(false);
		}
	};

	const { values, errors, touched, setFieldValue, handleBlur, handleSubmit } =
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
		>
			<div
				className="sm:row-flex-start flex-column w-full gap-x-3 
			gap-y-4"
			>
				<CustomFormField
					fieldType={FormFieldType.SKELETON}
					name="passport_upload"
					label="Upload Passport"
					errors={errors}
					onBlur={handleBlur}
					touched={touched}
					renderSkeleton={() => (
						<FileUpload
							title="Upload Photo"
							name="passport_upload"
							onFileChange={(file) => {
								setFieldValue("identificationDocument", file);
							}}
						/>
					)}
				/>

				<CustomFormField
					fieldType={FormFieldType.SKELETON}
					name="payment_receipt_upload"
					label="Upload Proof of Payment"
					errors={errors}
					onBlur={handleBlur}
					touched={touched}
					renderSkeleton={() => (
						<FileUpload
							title="Upload Photo"
							name="payment_receipt_upload"
							onFileChange={(file) => {
								setFieldValue("payment_receipt_upload", file);
							}}
						/>
					)}
				/>
			</div>

			<div
				className="sm:row-flex-start flex-column w-full gap-x-3 
			gap-y-4"
			>
				<CustomFormField
					fieldType={FormFieldType.SKELETON}
					name="certificate_upload"
					label="Upload Testimonial or First school leaving certificate (if available)"
					errors={errors}
					renderSkeleton={() => (
						<FileUpload
							title="Upload Photo"
							name="certificate_upload"
							onFileChange={(file) => {
								setFieldValue("certificate_upload", file);
							}}
						/>
					)}
				/>

				<CustomFormField
					fieldType={FormFieldType.SKELETON}
					name="birth_certificate_upload"
					label="Upload Birth Certificate"
					errors={errors}
					onBlur={handleBlur}
					touched={touched}
					renderSkeleton={() => (
						<FileUpload
							title="Upload Photo"
							name="birth_certificate_upload"
							onFileChange={(file) => {
								setFieldValue("birth_certificate_upload", file);
							}}
						/>
					)}
				/>
			</div>
		</ApplicationFormWrapper>
	);
};

export default DocumentForm;
