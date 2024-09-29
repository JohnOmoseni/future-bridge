import { useState } from "react";
import ApplicantForm from "@/components/forms/website-2/ApplicantForm";
import SectionWrapper from "@/layouts/SectionWrapper";
import MultiStepForm from "../_components/MultistepIndicator";
import ParentForm from "@/components/forms/website-2/ParentApplicationForm";
import DocumentForm from "@/components/forms/website-2/DocumentForm";
import ApplicationSuccess from "./success";

function ApplicationPage() {
	const [step, setStep] = useState(1);

	const nextStep = () => {
		setStep((prev) => Math.min(4, prev + 1));
	};

	const prevStep = () => {
		setStep((prev) => Math.max(1, prev - 1));
	};

	console.log("[STEP]", step);

	return (
		<SectionWrapper>
			<div>
				<MultiStepForm step={step} />
			</div>

			<div className="">
				{step === 1 && (
					<ApplicantForm step={step} nextStep={nextStep} prevStep={prevStep} />
				)}
				{step === 2 && (
					<ParentForm step={step} nextStep={nextStep} prevStep={prevStep} />
				)}
				{step === 3 && (
					<DocumentForm step={step} nextStep={nextStep} prevStep={prevStep} />
				)}
				{step === 4 && <ApplicationSuccess />}
			</div>
		</SectionWrapper>
	);
}

export default ApplicationPage;
