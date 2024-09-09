import {
	Partner1,
	Partner2,
	Partner3,
	Partner4,
	Partner5,
} from "@/constants/icons";

const partners = [Partner1, Partner2, Partner3, Partner4, Partner5];

const Partners = () => {
	return (
		<div className="">
			<div className="flex-column !items-center gap-3.5">
				<p className="badge">
					Partners
					<span className="tag-variant" />
				</p>
			</div>

			<div className="section-body mx-auto !mt-16 min-h-[30vh] max-w-[1100px]">
				<div className="flex-column sm:row-flex !flex-wrap !justify-evenly gap-6 max-sm:items-center">
					{/* Partner logos */}
					{partners?.map((Partner, idx) => (
						<div className="flex-column items-center gap-3.5" key={idx}>
							<Partner className="h-20" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Partners;
