import BackArrow from "@/components/BackArrow";
import { newsPost1 } from "@/constants/icons2";
import SectionWrapper from "@/layouts/SectionWrapper";

function WelcomeNote() {
	return (
		<SectionWrapper>
			<BackArrow title="Welcome note from our Principal" />

			<div className="mt-8 h-[45vh] w-1/2 max-w-[600px]">
				<img src={newsPost1} alt="" className="h-full w-full" />
			</div>

			<p className="my-10 brightness-50 tracking-wider leading-6 pr-3">
				We are thrilled to announce the arrival of our dynamic new Principal,
				Rev Fr Samuel A. Taiwo, who brings a wealth of experience, passion, and
				dedication to our school community. With Rev Fr Samuel A. Taiwo at the
				helm, we are embarking on an exciting new chapter of educational
				excellence and innovation.
				<br /> <br />
				A visionary leader, Rev Fr Samuel A. Taiwo has a deep understanding of
				the evolving landscape of education and is committed to providing a
				nurturing and inclusive environment where every student can thrive. With
				a focus on fostering critical thinking, creativity, and skill
				development.
				<br />
				<br />
				Rev Fr Samuel A. Taiwo is dedicated to preparing our students for
				success in the 21st century. Rev Fr Samuel A. Taiwo’s leadership is
				characterized by a collaborative approach that empowers teachers,
				parents, and students to actively contribute to the growth and
				development of our school. Drawing upon their extensive experience, Rev
				Fr Samuel A. Taiwo will guide our talented team of educators to deliver
				an exceptional academic program that integrates innovation, technology,
				and personalized learning.
				<br />
				<br />
				As we embark on this exciting journey with Rev Fr Samuel A. Taiwo, we
				invite you to join us in shaping the future of our school. Together, we
				will continue to create an environment where each student can unlock
				their full potential and become confident, compassionate, and
				accomplished individuals.
				<br />
				<br />
				Please join us in extending a warm welcome to Rev Fr Samuel A. Taiwo as
				we embark on an extraordinary educational adventure together
			</p>
		</SectionWrapper>
	);
}

export default WelcomeNote;
