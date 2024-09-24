import { ArrowLeft } from "@/constants/icons";
import { useNavigate } from "react-router-dom";

function BackArrow({
	onHandleGoBack,
	title,
}: {
	title?: string;
	onHandleGoBack?: (() => void) | undefined;
}) {
	const navigate = useNavigate();

	return (
		<div className="row-flex-start gap-2">
			<ArrowLeft
				onClick={() => (onHandleGoBack ? onHandleGoBack() : navigate(-1))}
				size={22}
				className="icon"
			/>

			{title && <h3 className="text-2xl lg:text-3xl">{title}</h3>}
		</div>
	);
}

export default BackArrow;
