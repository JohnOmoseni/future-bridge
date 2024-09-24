import { about } from "@/constants/icons2";

function Gallery() {
	return (
		<div className="pt-6 pb-8 px-8 md:px-[4%] text-secondary-foreground bg-[var(--bg-black)]">
			<div className="flex-column !items-center gap-1.5">
				<span className="text-sm text-blue-500 text-center">
					All work and no play...
				</span>
				<h3 className="text-center">
					Here are some of our extracurricular activities/Gallery
				</h3>

				<p className="text-sm text-center mt-0.5 w-[42ch]">
					With a comprehensive curriculum, state-of-the-art facilities, and a
					wide range...
				</p>
			</div>

			<div className="mt-12 grid grid-cols-[1fr_1fr_1.5fr] grid-rows-[200px_250px] gap-4">
				<img src={about} alt="" className="size-full object-cover" />
				<img src={about} alt="" className="size-full object-cover" />
				<img
					src={about}
					alt=""
					className="size-full col-[3/3] row-[1/3] object-cover"
				/>
				<img src={about} alt="" className="size-full col-[1/3] object-cover" />
			</div>
		</div>
	);
}

export default Gallery;
