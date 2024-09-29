import {
	gallery4_home,
	gallery_1,
	gallery_2,
	gallery_3,
} from "@/constants/icons2";

function Gallery() {
	return (
		<div className="pt-6 pb-8 px-3.5 md:px-[4%] text-secondary-foreground bg-[var(--bg-black)]">
			<div className="flex-column !items-center gap-1.5 px-1">
				<span className="text-sm text-blue-500 text-center">
					All work and no play...
				</span>
				<h3 className="text-center">
					Here are some of our extracurricular activities/Gallery
				</h3>

				<p className="text-sm text-center mt-0.5 max-w-[42ch]">
					With a comprehensive curriculum, state-of-the-art facilities, and a
					wide range...
				</p>
			</div>

			<div className="mt-12 grid-cols-2 grid-rows-[100px_150px_250px] grid sm:grid-cols-[1fr_1fr_1.5fr] sm:grid-rows-[200px_250px] gap-x-4 gap-y-3">
				<img src={gallery_1} alt="" className="size-full object-cover" />
				<img src={gallery_2} alt="" className="size-full object-cover" />
				<img
					src={gallery_3}
					alt=""
					className="size-full col-span-2 sm:col-[1/3] object-cover max-sm:rounded-sm"
				/>
				<img
					src={gallery4_home}
					alt=""
					className="size-full col-span-2 sm:col-[3/3] sm:row-[1/3] object-cover max-sm:rounded-sm"
				/>
			</div>
		</div>
	);
}

export default Gallery;
