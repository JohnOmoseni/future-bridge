import { useFormik } from "formik";
import { InferType } from "yup";
import { ContactSchema } from "@/schema";
import { Envelope, Support } from "@/constants/icons";
import { useMutation } from "@tanstack/react-query";
import { publicApi } from "@/server/req/requestApis";
import { toast } from "sonner";

import FormWrapper from "./FormWrapper";
import CustomFormField, { FormFieldType } from "./CustomFormField";
import { ContactUsType } from "@/types/server";

const ContactForm = () => {
	const contactMutation = useMutation({
		mutationFn: (data: ContactUsType) => publicApi.postContactUs(data),
		onError: (error) => {
			console.error("Contact error", error);
			toast.error("An issue was encountered sending message. Please try again");
		},
		onSuccess: (data: any) => {
			const { status } = data || {};
			if (!status) {
				toast.warning(`${data?.message}`);
				return;
			}
			if (status) toast.success(`Message sent successfully`);
		},
	});

	const onSubmit = async (values: InferType<typeof ContactSchema>) => {
		try {
			const data = {
				email: values.email,
				name: values.name,
				subject: values.subject,
				message: values.message,
			};

			contactMutation.mutate(data);
		} catch (error) {
			toast.error("An issue was encountered sending message. Please try again");
		}
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				name: "",
				email: "",
				subject: "",
				message: "",
			},
			validationSchema: ContactSchema,
			onSubmit,
		});

	return (
		<FormWrapper
			buttonLabel="Send"
			icon={Support}
			headerText="Send a message and we’ll respond within 24 hours"
			onSubmit={handleSubmit}
			isSubmitting={contactMutation.isPending}
		>
			<CustomFormField
				fieldType={FormFieldType.INPUT}
				name="name"
				field={{ value: values.name, placeholder: "Your Name" }}
				onChange={handleChange}
				onBlur={handleBlur}
				errors={errors}
				touched={touched}
				required
			/>

			<CustomFormField
				fieldType={FormFieldType.INPUT}
				name="email"
				field={{
					value: values.email,
					placeholder: "Your email",
					type: "email",
				}}
				onChange={handleChange}
				onBlur={handleBlur}
				errors={errors}
				iconSrc={Envelope}
				required
				touched={touched}
			/>

			<CustomFormField
				fieldType={FormFieldType.INPUT}
				name="subject"
				field={{ value: values.subject, placeholder: "Subject" }}
				onChange={handleChange}
				onBlur={handleBlur}
				errors={errors}
				touched={touched}
				required
			/>

			<CustomFormField
				fieldType={FormFieldType.TEXTAREA}
				name="message"
				field={{
					value: values.message,
					placeholder: "Enter message",
				}}
				onChange={handleChange}
				onBlur={handleBlur}
				errors={errors}
				touched={touched}
			/>
		</FormWrapper>
	);
};

export default ContactForm;
