import BackArrow from "@/components/BackArrow";
import { newsPost1 } from "@/constants/icons2";

function Gallery() {
	return (
		<div>
			<div className="relative px-6 py-6 ">
				<BackArrow />
			</div>

			<div
				className="py-6 text-secondary-foreground h-full px-6 md:px-8 bg-[#131623]
"
			>
				<h4>Excursion to Whispering Palm, Badagry</h4>

				<div className="grid gap-x-6 grid-rows-[220px,_minmax(250px,_350px)] grid-cols-3 mt-8 mb-6">
					<div className="w-full">
						<img src={newsPost1} alt="" className="size-full" />
					</div>

					<div className="">
						<img src={newsPost1} alt="" className="size-full" />
					</div>
					<div className="row-span-3">
						<img src={newsPost1} alt="" className="size-full" />
					</div>
					<div className="col-span-2 mt-6">
						<img src={newsPost1} alt="" className="size-full" />
					</div>
				</div>

				<div></div>
			</div>
		</div>
	);
}

export default Gallery;
