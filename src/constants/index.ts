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
		href: "https://wa.me/+2347014075556?text=Hello%20there!",
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

export const privacyPolicy = [
	{
		introduction:
			"Thank you for selecting Future Bridge Services Limited. We are dedicated to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, utilize, and protect your data when you use our services.\n \n At Future Bridge Services Limited, we are committed to protecting the privacy and security of the personal information provided to us by schools, teachers, students, and parents. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data in accordance with the laws of Nigeria.",
	},
	{
		label: "Information we collect",
		body: "We provide web portals and EdTech services to schools, and as part of these services, schools may collect and store the following personal data on our platform: \n \n Personal Information of Staff and Students: This may include names, contact details (such as phone numbers or email addresses), demographic information, student performance data, and any additional information provided by schools or teachers.\n \n Teacher Notes and Evaluations: Teachers may upload notes and evaluations regarding student performance directly to the platform.\n \n Parent Information: Parent contact information may be provided as part of the student records.\n \n We do not collect any personal data directly from students or minors but allow schools to store such information on the platform.",
	},
	{
		label: "How we use Information",
		body: "The personal information collected by schools and stored on our platform is used for the following purposes: \n \n Facilitating Educational Services: To allow teachers, administrators, students, and parents to interact with the web portal and access relevant educational tools. \n \n Performance Monitoring: Teachers can use the platform to record and track the performance and progress of students.\n \n Access Management: Different access levels ensure that only authorized users (e.g., teachers, parents, students) can view and manage specific data.",
	},
	{
		label: "Legal Compliance",
		body: "We may share personal information with third parties as required by law or for legal compliance purposes, including: \n \n Compliance with Legal Obligations: We may disclose personal information to comply with court orders, legal processes, or regulatory requirements. \n \n Third-Party Service Providers: We work with trusted third-party service providers who support the operation of our platform, including cloud storage providers. These providers are contractually obligated to maintain the confidentiality and security of the personal information they process on our behalf.",
	},
	{
		label: "Data Security",
		body: "We take data security seriously and employ industry-standard encryption and security protocols to protect personal information stored on our platform. This includes: \n \n Encryption: All data transmitted to and from our platform is encrypted using industry-standard encryption tools to prevent unauthorized access.\n \n Third-Party Cloud Storage: We partner with reliable cloud service providers that comply with data security best practices.",
	},

	{
		label: "Data Retention",
		body: "We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. Schools have the right to request the deletion of their data from the platform at any time by contacting us.",
	},

	{
		label: "User right and access",
		body: "Schools and their designated administrators have the following rights regarding their data: \n  \n Access: Schools may access their data stored on the platform at any time. \n Correction: Schools can correct any inaccurate or incomplete personal information.\n Deletion: Schools may request the deletion of their data by contacting us at Contact Information]. We will process the deletion request promptly, subject to any legal obligations we may have to retain the information.",
	},
	{
		label: "Sharing information with third parties",
		body: "We may share personal information stored on our platform with the following entities: \n \n Service Providers: We work with third-party service providers that help us manage our platform and services. These providers are bound by confidentiality agreements and are only allowed to use the data for purposes specified by us. \n \n Legal and Regulatory Bodies: We may disclose personal data to comply with any legal obligations, protect our rights, or respond to legal processes.",
	},
	{
		label: "Changes to this privacy policy",
		body: "Our business and services evolve over time, and this Privacy Policy may be updated periodically to reflect these changes. Any material changes to this policy will be posted on our website, and schools will be notified of any significant changes. We encourage users to review this Privacy Policy frequently to stay informed about how we protect personal information. \n \n If changes materially affect the protection of personal information collected in the past, we will obtain consent from affected users where required by law before making such changes.",
	},
	{
		label: "Cookies and Tracking technologies",
		body: "We may use cookies and similar tracking technologies to improve the user experience on our platform and gather insights on how the platform is used. Users may choose to disable cookies in their browser settings, although this may affect the functionality of certain features on our platform.",
	},
	{
		label: "Governing law",
		body: "This Privacy Policy is governed by the laws of the Federal Republic of Nigeria. By using our platform, you consent to the processing of your personal information in accordance with this policy and Nigerian law.",
	},
	{
		label: "Contact Us",
		body: "If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at: \n \n Email: support@futurebridge.ng \n Phone: +2347014075556 \n Address: 0375 NAF Valley Estate, Asokoro, Abuja",
	},
];
