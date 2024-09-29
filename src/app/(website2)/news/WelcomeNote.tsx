import BackArrow from "@/components/BackArrow";
import { principal } from "@/constants/icons2";
import SectionWrapper from "@/layouts/SectionWrapper";

function About() {
	return (
		<SectionWrapper>
			<div className="flex-column gap-4">
				<BackArrow title="Welcome note from our Principal" />

				<div className="grid grid-cols-1 gap-6 mt-2">
					<img
						src={principal}
						alt=""
						className="size-full max-h-[450px] max-w-[580px] max-sm:-mx-1"
					/>

					<p className="flex-column mt-3 sm:mt-6 gap-4 pr-2 md:pr-4">
						We are thrilled to announce the arrival of our dynamic new
						Principal, Rev Fr Samuel A. Taiwo, who brings a wealth of
						experience, passion, and dedication to our school community. With
						Rev Fr Samuel A. Taiwo at the helm, we are embarking on an exciting
						new chapter of educational excellence and innovation.
						<br />
						<br />
						A visionary leader, Rev Fr Samuel A. Taiwo has a deep understanding
						of the evolving landscape of education and is committed to providing
						a nurturing and inclusive environment where every student can
						thrive. With a focus on fostering critical thinking, creativity, and
						skill development,  Rev Fr Samuel A. Taiwo is dedicated to preparing
						our students for success in the 21st century.
						<br />
						<br />
						Rev Fr Samuel A. Taiwo’s leadership is characterized by a
						collaborative approach that empowers teachers, parents, and students
						to actively contribute to the growth and development of our school.
						Drawing upon their extensive experience, Rev Fr Samuel A. Taiwo will
						guide our talented team of educators to deliver an exceptional
						academic program that integrates innovation, technology, and
						personalized learning.
						<br />
						<br />
						As we embark on this exciting journey with Rev Fr Samuel A. Taiwo,
						we invite you to join us in shaping the future of our school.
						Together, we will continue to create an environment where each
						student can unlock their full potential and become confident,
						compassionate, and accomplished individuals.
						<br />
						Please join us in extending a warm welcome to Rev Fr Samuel A. Taiwo
						as we embark on an extraordinary educational adventure together
					</p>
				</div>
			</div>
		</SectionWrapper>
	);
}

export default About;
