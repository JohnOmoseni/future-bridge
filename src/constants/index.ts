import {
	Facebook,
	feature1,
	feature2,
	feature3,
	feature4,
	feature5,
	person1,
	person2,
	person3,
	person4,
	person5,
	person6,
} from "./icons";
import {
	Chat,
	Envelope,
	Instagram,
	Location,
	PhoneCall,
} from "@/constants/icons";

export const socials = [
	{
		label: Instagram,
		href: "https://www.instagram.com/futurebridgetech?igsh=aHh6NjRieTZtenIy&utm_source=qr",
		tag: "instagram",
	},
	{
		label: Facebook,
		href: "https://www.facebook.com/profile.php?id=61565626941290&mibextid=LQQJ4d",
		tag: "facebook",
	},
	{
		label: Chat,
		href: "http://whatsapp.com/",
		tag: "chat",
	},
];

export const contactInfo = [
	{
		icon: Location,
		value: "0375 Naf Valley Estate, Asokoro, Abuja.",
	},
	{
		icon: Envelope,
		value: "info@futurebridge.ng",
	},
	{
		icon: Instagram,
		value: "futurebridgetech",
	},
	{
		icon: PhoneCall,
		value: "+23470 1407 5556, +2347 03868 8683",
	},
	{
		icon: Chat,
		value: "+2347 014075556",
	},
];

export const sidebarLinks = [
	{
		label: "Home",
		tag: "home",
		href: "/",
	},
	{
		label: "About us",
		tag: "about",
		href: "/about",
	},
	{
		label: "How it works",
		tag: "get-started",
		href: "/get-started",
	},
	{
		label: "FAQ",
		tag: "faq",
		href: "/faqs",
	},
	{
		label: "Contact us",
		tag: "contact",
		href: "/contact",
	},
];

export const aboutSection = [
	{
		title: "About us",
		body: "Future Bridge is a team of educators, business developers and tech talents with a shared dream of transforming the way students learn, teachers teach, and schools operate.",
	},
	{
		title: "Our Mission",
		body: "Our purpose is to reshape education for the better. We believe education is more than just lessons and grades, and we want to provide every student with the tools they need to succeed. ",
	},
	{
		title: "Our Vision",
		body: "Our vision is to lead the transformation of educational institutions through innovative technology, creating environments where students thrive, teachers inspire, and schools achieve unparalleled excellence",
	},
];

export const features = [
	{
		title: "Complimentary website for schools",
		subtitle:
			"This feature provides the school with complimentary website to Elevate the schools online presence.",
		img: feature1,
	},
	{
		title: "Online lesson note/Reading material",
		subtitle:
			"This feature provides the students with instant access to class notes.",
		img: feature2,
	},
	{
		title: "Complimentary website for schools",
		subtitle:
			"This feature provides the school with complimentary website to Elevate the school’s online presence.",
		img: feature3,
	},
	{
		title: "Management admin panel",
		subtitle:
			"This feature provides centralized control for effective management.",
		img: feature4,
	},
	{
		title: "Online assignment and submissions",
		subtitle:
			"This feature provides the students with instant access to class notes.",
		img: feature5,
	},
];

export const steps = [
	{
		step: "Fill our form",
		subtitle: "Enter important information about your school.",
	},
	{
		step: "Payment",
		subtitle: "Make a one time Set-up fee of N296,000.",
	},
	{
		step: "Start Learning",
		subtitle: "Get your administration login and step into the future.",
	},
];

export const testimonials = [
	{
		text: "“Since integrating Future Bridge, our school’s efficiency and public rating has skyrocketed. The platform is a game-changer.”",
		name: "Joyce Eneke",
		title: "Principal",
		avatar: person1,
	},
	{
		text: "“The interactive tools have transformed my teaching. Students are more engaged and enthusiastic.”",
		name: "Tara Ahmed",
		title: "Teacher",
		avatar: person2,
	},
	{
		text: "“I appreciate the real-time updates on my child’s progress. It’s invaluable.”",
		name: "Nwadike Loveth",
		title: "Parent",
		avatar: person3,
	},
	{
		text: "“The visuals and interactive user interface on Future Bridge are fantastic. The platform has made me more confident and independent in my learning.”",
		name: "Emmanuel David",
		title: "Student",
		avatar: person4,
	},
	{
		text: "“Everyday, I look forward to opening my Future Bridge portal to check for assignments and update from teachers.”",
		name: "Josephine Doubra",
		title: "Student",
		avatar: person5,
	},
	{
		text: "“It is a very exciting experience using Future Bridge to learn.”",
		name: "Richard Ani",
		title: "Student",
		avatar: person6,
	},
];

export const footerLinks = [
	{
		name: "Company",
		dropdown: [
			{
				link: "Home",
				href: "/",
			},
			{
				link: "About us",
				href: "/about",
			},
			{
				link: "How it works",
				href: "/get-started",
			},
			{
				link: "FAQ",
				href: "/faqs",
			},
			{
				link: "Contact us",
				href: "/contact",
			},
		],
	},
];

export const faq = [
	{
		trigger:
			"Can we use this portal in combination with other schools software/portal?",
		body1: "Yes you can use the portal in combination with others.",
	},
	{
		trigger: "Is it Billed monthly or annually?",
		body1: "Simple, Termly Payments",
	},
	{
		trigger: "Is there a test run period?",
		body1:
			"Experience It First. \n After the initial setup fee, your school gets a full 6 weeks to explore our portal before completing the payment.",
	},
	{
		trigger: "How much is the set-up fee?",
		body1:
			"The setup fee is ₦296,000. A one-time investment to unlock the full potential of our portal for your school.",
	},
	{
		trigger: "How much does it cost?",
		body1:
			"We offer flexible, per-student pricing tailored to your needs. Contact us for detailed information.",
	},
];
