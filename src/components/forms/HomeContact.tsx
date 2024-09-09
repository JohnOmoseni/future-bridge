import { useState } from "react";
import { useFormik } from "formik";
import { InferType } from "yup";
import { toast } from "sonner";
import { ContactSchema } from "@/schema";
import { Envelope } from "@/constants/icons";

import CustomFormField, { FormFieldType } from "./CustomFormField";
import { cn } from "@/lib/utils";
import { Button } from "../CustomButton";

const HomeContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (values: InferType<typeof ContactSchema>) => {
		setIsLoading(true);
		console.log(values);

		try {
		} catch {
			toast.error("Error registering school");
		} finally {
			setIsLoading(false);
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
		<div className="overflow-hidden rounded-lg">
			<form onSubmit={handleSubmit} className="flex-column mt-3 flex-1 gap-6">
				<div className="flex-column w-full gap-6 sm:gap-3">
					<div
						className={cn(
							"sm:row-flex-start flex-column w-full gap-x-3 gap-y-6"
						)}
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
					</div>

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
				</div>

				<Button
					type="submit"
					title={isLoading ? "Submitting..." : "Send"}
					className={cn("!mt-auto !w-full !py-6")}
					disabled={isLoading}
					isLoading={isLoading}
				/>
			</form>
		</div>
	);
};

export default HomeContactForm;
