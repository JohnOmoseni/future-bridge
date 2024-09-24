import { newsPost1 } from "@/constants/icons2";
import { ArrowBigDown } from "lucide-react";
import { Link } from "react-router-dom";

function Posts() {
	return (
		<section>
			<div className="rounded-xl py-4 px-6 shadow relative -top-24">
				<ul className="row-flex-btwn gap-8"></ul>
			</div>

			<div>
				<h3>Recent Posts</h3>

				<div className="mt-6 grid grid-cols-[1fr_2fr] gap-8">
					<ul className="flex-column gap-6">
						<PostCard />
						<PostCard />
						<PostCard />
						<PostCard />
					</ul>

					<div className="flex-1 w-full grid gap-6 grid-cols-[repeat(3,_minmax(300px,_1fr))] grid-rows-[250px_350px] overflow-hidden">
						<div
							className="rounded-xl shadow overflow-hidden  bg-no-repeat bg-cover relative col-span-1"
							// style={{ backgroundImage: `url(${newsPost1})` }}
						>
							<img src={newsPost1} alt="" className="absolute size-full" />
							<div className="bg-black w-full text-background-100 bg-opacity-10 backdrop-blur-md py-3.5 px-3 absolute bottom-0 left-0 min-h-16">
								<h4>The subtle act of reading a lot!</h4>

								<div className="w-full brightness-75 mt-3 row-flex-btwn text-xs fap-4">
									<Link to="#" className="">
										Read{" "}
									</Link>

									<span className="tracking-wide">5mins read</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Posts;

function PostCard() {
	return (
		<li className="md:min-w-[410px] row-flex-start gap-5 !items-start group relative w-full overflow-hidden rounded-xl shadow-sm transition hover:shadow-sm max-sm:min-w-[300px]">
			<div className="relative min-h-[180px] w-2/5 self-stretch">
				<img
					src=""
					height={1000}
					width={1000}
					alt=""
					className="object-cover size-full"
				/>
			</div>

			<div className="flex-column self-stretch flex-1 w-full gap-2 py-3 pr-4">
				<span className="text-xs">September 25th, 2024</span>

				<Link to="#" className="inline-flex">
					<h3 className="line-clamp-2 capitalize ">
						Welcome note from principal
					</h3>
				</Link>

				<p className="brightness-75 my-1.5">
					We are thrilled to announce the arrival of our dynamic new Principal,
					Rev Fr Samuel A. Taiwo,{" "}
				</p>

				<div className="row-flex-btwn w-full  text-grey gap-4 mt-auto">
					<p className="text-sm font-medium leading-4">Read</p>

					<ArrowBigDown size={20} />
				</div>
			</div>
		</li>
	);
}
