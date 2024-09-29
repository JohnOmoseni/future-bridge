import BackArrow from "@/components/BackArrow";
import { gallery_1, gallery_2, gallery_3, gallery_4 } from "@/constants/icons2";

function Gallery() {
	return (
		<div>
			<div className="relative px-4 py-6 md:px-6 md:py-8">
				<BackArrow title="Snapshots of our Students and  life at St. Endas College!" />
			</div>

			{[1, 2]?.map((_gallery, idx) => (
				<div
					key={idx}
					className="py-8 sm:mt-2 last:mt-6 text-secondary-foreground h-full px-5 md:px-10 bg-[#131623]
"
				>
					<h3>Excursion to Whispering Palm, Badagry</h3>

					<div className="mt-6 sm:mt-8 grid-cols-2 grid-rows-[100px_150px_300px] grid sm:grid-cols-[1fr_1fr_1.5fr] sm:grid-rows-[200px_250px] gap-x-3.5 gap-y-3">
						<img
							src={gallery_1}
							alt=""
							className="size-full object-cover max-sm:rounded-sm"
						/>
						<img
							src={gallery_2}
							alt=""
							className="size-full object-cover max-sm:rounded-sm"
						/>
						<img
							src={gallery_3}
							alt=""
							className="size-full col-span-2 sm:col-[1/3] object-cover max-sm:rounded-sm"
						/>
						<img
							src={gallery_4}
							alt=""
							className="size-full col-span-2 sm:col-[3/3] sm:row-[1/3] object-cover max-sm:rounded-sm"
						/>
					</div>
				</div>
			))}
		</div>
	);
}

export default Gallery;
