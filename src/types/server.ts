export interface ContactUsType {
	email: string;
	name: string;
	message: string;
	subject?: string;
}

export interface RegisterSchoolType {
	email: string;
	name: string;
	acronym: string;
	phone: string;
	approx_staff_total: string | number;
	approx_student_total: string | number;
	address: string;
}
