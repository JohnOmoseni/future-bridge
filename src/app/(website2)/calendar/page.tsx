import BackArrow from "@/components/BackArrow";
import SectionWrapper from "@/layouts/SectionWrapper";
import { cn } from "@/lib/utils";

function Calendar() {
	return (
		<SectionWrapper>
			<BackArrow />

			<div className="mt-2">
				<div className="flex-column w-full gap-0.5 !items-center">
					<h3 className="text-2xl md:text-3xl">Calendar</h3>
					<p className="text-[1.1rem] text-center">
						See all our activities for the academic year
					</p>
					<span className="text-xs text-grey mt-1 text-center">
						Note: Dates might be subject to change by management.
					</span>
				</div>

				<div className="mt-8 grid grid-cols-3">
					<div
						className={cn(
							"rounded-sm shadow py-3.5 px-4 flex-column gap-2 bg-blue-300"
						)}
					>
						<h4 className={cn("font-semibold text-blue-600")}>
							Excursion to whispering palms, Badagry
						</h4>

						<p className="pr-2 text-base mb-2 leading-5">
							All students from junior secondary school 1-3 would actively
							participate in the excursion, which would not only be a form of
							social activity but also Educational activity.
						</p>

						<span className="mt-auto inline-block text-xs">
							5th August, 2024
						</span>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}

export default Calendar;
