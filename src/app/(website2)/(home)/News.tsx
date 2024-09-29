import { blogCard } from "@/constants/icons2";
import { Link } from "react-router-dom";

function News() {
	return (
		<div className="section">
			<h3 className="text-center">School news and Blog</h3>

			<ul className="mt-12 flex-column sm:grid grid-cols-2 gap-x-12 gap-y-5">
				{[1, 2, 3].map((_card, idx) => (
					<li
						key={idx}
						className="md:min-w-[410px] row-flex-start gap-3.5 md:gap-5 !items-start group relative w-full overflow-hidden rounded-xl transition hover:shadow-sm max-sm:min-w-[300px]"
					>
						<div className="relative min-h-[180px] w-2/5 self-stretch">
							<img
								src={blogCard}
								height={1000}
								width={1000}
								alt=""
								className="object-cover size-full"
							/>
						</div>

						<div className="flex-column self-stretch flex-1 w-full gap-2 py-3 pr-1.5">
							<span className="text-xs text-foreground-variant font-semibold">
								September 25th, 2024
							</span>

							<Link to="#" className="inline-flex">
								<h3 className="line-clamp-2 capitalize ">New principal</h3>
							</Link>

							<p className="text-sm leading-5 my-1 max-sm:pr-3 pr-2 line-clamp-5">
								Our students are aided and encouraged in the development of
								relevant skills across different sectors, such as tech, event
								planning, fashion design and more. St Endas
							</p>

							<Link
								to=""
								className="text-xs font-medium text-foreground-variant"
							>
								Read more &gt;&gt;&gt;
							</Link>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default News;
