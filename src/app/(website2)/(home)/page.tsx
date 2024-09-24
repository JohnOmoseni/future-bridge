import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Gallery from "./Gallery";
import News from "./News";
import Testimonials from "./Testimonials";

function Home() {
	return (
		<>
			<Hero />

			<div className="py-6 px-8 bg-[var(--bg-black)] text-secondary-foreground w-full min-h-[20vh] grid place-items-center">
				<p className="text-center max-w-5xl mx-auto">
					ST Endas Colege Agbarho has been a symbol of excellence in education
					over the years. Our mission is to continue to enhance the community by
					providing safe and clean environment for students
				</p>
			</div>

			<About />

			<Features />

			<Gallery />

			<News />

			<Testimonials />
		</>
	);
}

export default Home;
