import { useState } from "react";
import { useFormik } from "formik";
import { InferType } from "yup";
import { RegisterSchoolSchema } from "@/schema";
import { Value } from "react-phone-number-input";
import { Envelope } from "@/constants/icons";
import { useMutation } from "@tanstack/react-query";
import { publicApi } from "@/server/req/requestApis";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import FormWrapper from "./FormWrapper";
import CustomFormField, { FormFieldType } from "./CustomFormField";

import "react-phone-number-input/style.css";
import { RegisterSchoolType } from "@/types/server";

const RegisterForm = ({ user }: { user?: any }) => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const registerMutation = useMutation({
		mutationFn: (data: RegisterSchoolType) => publicApi.registerSchool(data),
		onError: (error) => {
			console.error("Mutation error", error);
			toast.error("An error occured");
		},
		onSuccess: (data: any) => {
			const url = data?.data?.authorization_url;
			console.log("Callback URL", url, data);

			if (!data?.status) return toast.warning(`${data?.message}`);

			toast.success("Request completed", {
				description: "Redirecting...",
			});
			if (url) navigate(url);
		},
	});

	const onSubmit = async (values: InferType<typeof RegisterSchoolSchema>) => {
		setIsLoading(true);
		console.log("Form submitted", values);

		try {
			const data = {
				email: values.email,
				name: values.name,
				acronym: values.schoolAlias,
				phone: values.phoneNumber,
				approx_staff_total: values.numberOfStaffs,
				approx_student_total: values.numberOfStudents,
				address: values.address,
			};

			registerMutation.mutate(data);
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
			name: user?.name || "",
			email: user?.email || "",
			schoolAlias: user?.schoolAlias || "",
			numberOfStaffs: user?.numberOfStaffs || "",
			numberOfStudents: user?.numberOfStudents || "",
			phoneNumber: user?.phoneNumber || "",
			address: user?.address || "",
		},
		validationSchema: RegisterSchoolSchema,
		onSubmit,
	});

	return (
		<FormWrapper
			buttonLabel="Proceed to payment"
			headerText="School Information"
			onSubmit={handleSubmit}
			isSubmitting={isLoading}
		>
			<div className="md:row-flex-start flex-column w-full gap-x-3 gap-y-4">
				<CustomFormField
					fieldType={FormFieldType.INPUT}
					name="name"
					label="Name of school"
					field={{ value: values.name, placeholder: "Enter school name" }}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					touched={touched}
					required
				/>

				<CustomFormField
					fieldType={FormFieldType.INPUT}
					name="schoolAlias"
					label="Acronym of school"
					field={{ value: values.schoolAlias, placeholder: "e.g SECA" }}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					touched={touched}
					required
				/>
			</div>

			<div className="md:row-flex-start flex-column w-full gap-x-3 gap-y-4">
				<CustomFormField
					fieldType={FormFieldType.INPUT}
					name="email"
					label="Email"
					field={{
						value: values.email,
						placeholder: "e.g seca@email.com",
						type: "email",
					}}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					iconSrc={Envelope}
					touched={touched}
				/>

				<CustomFormField
					fieldType={FormFieldType.PHONE_INPUT}
					name="phoneNumber"
					label="Phone no"
					field={{ value: values.phoneNumber, placeholder: "(555) 123-4567" }}
					onChange={(value: Value) => {
						setFieldValue("phoneNumber", value);
					}}
					onBlur={handleBlur}
					errors={errors}
					touched={touched}
				/>
			</div>

			<div className="md:row-flex-start flex-column w-full gap-x-3 gap-y-4">
				<CustomFormField
					fieldType={FormFieldType.INPUT}
					name="numberOfStaffs"
					label="Number of staffs in school"
					field={{
						value: values.numberOfStaffs,
						placeholder: "Enter number",
					}}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					touched={touched}
				/>

				<CustomFormField
					fieldType={FormFieldType.INPUT}
					name="numberOfStudents"
					label="Number of students in school"
					field={{
						value: values.numberOfStudents,
						placeholder: "Enter number",
					}}
					onChange={handleChange}
					onBlur={handleBlur}
					errors={errors}
					touched={touched}
				/>
			</div>

			<CustomFormField
				fieldType={FormFieldType.TEXTAREA}
				name="address"
				label="Address"
				field={{
					value: values.address,
					placeholder: "Enter school address",
				}}
				onChange={handleChange}
				onBlur={handleBlur}
				errors={errors}
				touched={touched}
			/>
		</FormWrapper>
	);
};

export default RegisterForm;
