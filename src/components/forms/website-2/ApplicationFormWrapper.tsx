import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/CustomButton";
import { FormProps } from "./ApplicantForm";
import { ArrowLeft, ArrowRight } from "@/constants/icons";

interface FormWrapperProps extends Omit<FormProps, "user"> {
	children: ReactNode;
	headerText: string;
	isSubmitting?: boolean;
	containerStyles?: string;
	btnStyles?: string;
	onSubmit?: () => void;
}

function ApplicationFormWrapper({
	children,
	isSubmitting,
	containerStyles,
	btnStyles,
	headerText,
	onSubmit,
	prevStep,
	nextStep,
	step,
}: FormWrapperProps) {
	return (
		<div
			className={cn(
				"w-full max-w-[1300px] mx-auto overflow-hidden flex-column gap-6",
				containerStyles
			)}
		>
			<div className="row-flex-btwn gap-4 w-full">
				<h3 className="leading-5 font-semibold">{headerText}</h3>

				<div className="row-flex-start gap-3 w-max">
					{step !== 1 && (
						<>
							<Button
								type="button"
								title="Previous"
								btnType="outline"
								className={cn(
									"!py-4 !px-6",
									btnStyles,
									step === 2 && "!hidden min-[600px]:!flex"
								)}
								disabled={isSubmitting}
								onClick={() => prevStep && prevStep()}
							/>

							<ArrowLeft
								onClick={() => prevStep && prevStep()}
								className={cn(
									"hidden",
									step === 2 && "max-[600px]:block size-4"
								)}
							/>
						</>
					)}

					{step !== 3 && (
						<>
							<Button
								type="button"
								title="Next"
								className={cn(
									"!py-4 !px-6",
									btnStyles,
									step === 2 && "!hidden min-[600px]:!flex"
								)}
								disabled={isSubmitting}
								onClick={() => nextStep && nextStep()}
							/>

							<ArrowRight
								onClick={() => nextStep && nextStep()}
								className={cn(
									"hidden",
									step === 2 && "max-[600px]:block size-4"
								)}
							/>
						</>
					)}
				</div>
			</div>

			<form
				onSubmit={onSubmit}
				className="flex-column w-full flex-1 gap-10 px-1 mt-6"
			>
				<div className="flex-column w-full gap-4">{children}</div>

				{step === 3 && (
					<Button
						type="submit"
						title={isSubmitting ? "Submitting..." : "Submit"}
						className={cn("!mt-auto mx-auto !py-6 !w-[80%]", btnStyles)}
						disabled={isSubmitting}
						isLoading={isSubmitting}
					/>
				)}
			</form>
		</div>
	);
}

export default ApplicationFormWrapper;
