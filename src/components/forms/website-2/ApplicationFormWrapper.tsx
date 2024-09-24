import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/CustomButton";

interface FormWrapperProps {
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
}: FormWrapperProps) {
	return (
		<div
			className={cn(
				"w-full max-w-[1200px] overflow-hidden flex-column gap-6",
				containerStyles
			)}
		>
			<div className="row-flex-btwn gap-4 w-full">
				<h3 className="leading-6">{headerText}</h3>

				<div className="row-flex-start gap-3">
					<Button
						type="button"
						title="Previous"
						btnType="outline"
						className={cn("!py-4 !px-6", btnStyles)}
						disabled={isSubmitting}
					/>

					<Button
						type="button"
						title="Next"
						className={cn("!py-4 !px-6", btnStyles)}
						disabled={isSubmitting}
					/>
				</div>
			</div>

			<form
				onSubmit={onSubmit}
				className="flex-column w-full flex-1 gap-10 px-1 mt-6"
			>
				<div className="flex-column w-full gap-4">{children}</div>

				<Button
					type="submit"
					title={isSubmitting ? "Submitting..." : "Submit"}
					className={cn("!mt-auto mx-auto !py-6 !w-[80%]", btnStyles)}
					disabled={isSubmitting}
					isLoading={isSubmitting}
				/>
			</form>
		</div>
	);
}

export default ApplicationFormWrapper;
