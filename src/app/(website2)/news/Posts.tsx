import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { blogImage3, blogImage5 } from "@/constants/icons2";
import { newsPost } from "@/constants/dashboard-index";
import { blogs } from "@/constants/blogs";

function Posts() {
	return (
		<section>
			<div className="rounded-xl bg-background-100 shadow max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-1/2 relative w-max -top-24 left-8">
				<ul className="p-3 row-flex-btwn gap-8">
					{[blogImage5, blogImage3]?.map((img, idx) => (
						<PostCardSmall key={idx} img={img} idx={idx} />
					))}
				</ul>
			</div>

			<div className="max-sm:mt-12 -mt-8">
				<h3>Recent Posts</h3>

				<div className="mt-6 flex-column md:grid grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
					<ul className="flex-column gap-6 w-full">
						{[1, 2, 3, 4]?.map((id) => {
							const blog = blogs.find((b) => b.id === id);
							return <PostCard key={blog?.id} blog={blog} />;
						})}
					</ul>

					<div className="flex-1 w-full grid gap-x-4 gap-y-3 max-[370px]:grid-cols-1 grid-cols-2 xl:grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[200px_160px_160px] sm:grid-rows-[180px_200px_200px] xl:grid-rows-[200px_250px] overflow-hidden">
						{newsPost?.map(({ image, text, link, read_time }, idx) => (
							<div
								key={idx}
								className={cn(
									"rounded-xl shadow overflow-hidden transition-all hover:shadow-md bg-no-repeat bg-center bg-cover relative col-span-1",
									idx === 0 && "col-[1/-1]"
								)}
								style={{ backgroundImage: `url(${image})` }}
							>
								<div
									className={cn(
										"bg-black w-full text-background-100 bg-opacity-10 backdrop-blur-md py-3.5 px-3 absolute bottom-0 left-0 min-h-16",
										idx === 0 && "row-flex"
									)}
								>
									<h4
										className={cn(
											"leading-5 text-sm brightness-90 line-clamp-2 pr-1",
											idx === 0 && "text-center text-base tracking-wide"
										)}
									>
										{text}
									</h4>

									{idx !== 0 && (
										<div className="w-full brightness-[0.8] mt-3 row-flex-btwn text-xs fap-4">
											<Link to={link} className="">
												Read
											</Link>

											<span className="tracking-wide">
												{read_time || "5mins read"}
											</span>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Posts;

type PostProps = {
	id: number;
	banner: string;
	title: string;
	introduction: string;
	created_at?: string;
};

function PostCard({ blog }: { blog: PostProps | undefined }) {
	return (
		<li className="md:min-w-[410px] row-flex-start gap-5 !items-start group relative w-full overflow-hidden rounded-lg shadow-sm transition hover:shadow-sm max-sm:min-w-[300px]">
			<div className="relative min-h-[150px] w-2/5 self-stretch">
				<img
					src={blog?.banner || ""}
					height={1000}
					width={1000}
					alt=""
					className="object-cover size-full"
				/>
			</div>

			<div className="flex-column self-stretch flex-1 w-full gap-2 py-3 pr-3.5">
				<span className="text-xs font-medium">{blog?.created_at}</span>

				<Link to={`/dashboard/news/${blog?.id}`} className="inline-flex">
					<h3 className="line-clamp-2 capitalize ">{blog?.title}</h3>
				</Link>

				<p className="brightness-75 line-clamp-4 text-base leading-5 mt-1.5 mb-2 pr-1">
					{blog?.introduction}
				</p>

				<div className="row-flex-btwn w-full text-grey gap-4 mt-auto">
					<Link
						to={`/dashboard/news/${blog?.id}`}
						className="text-sm font-medium leading-4 text-foreground-variant"
					>
						Read &gt;&gt;&gt;
					</Link>
				</div>
			</div>
		</li>
	);
}
const PostCardSmall = ({ img, idx }: { img: string; idx: number }) => (
	<li
		className={cn(
			"row-flex-start gap-4 !items-start group relative w-full overflow-hidden rounded-lg transition hover:shadow-sm",
			idx === 1 && "max-sm:hidden"
		)}
	>
		<div className="relative w-24  self-stretch">
			<img
				src={img}
				height={1000}
				width={1000}
				alt=""
				className="object-cover size-full"
			/>
		</div>

		<div className="flex-column self-stretch flex-1 w-full gap-1.5 py-2 pr-2">
			<span className="text-xs">September 25th, 2024</span>

			<Link to="#" className="inline-flex">
				<h4 className="line-clamp-2 leading-5 capitalize font-semibold">
					Whispering palm <br /> excursion!!{" "}
				</h4>
			</Link>

			<Link
				to="#"
				className="text-sm font-medium mt-3 leading-4 text-foreground-variant"
			>
				Read &gt;&gt;&gt;
			</Link>
		</div>
	</li>
);
