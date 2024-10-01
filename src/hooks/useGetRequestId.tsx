import { publicApiWebsite2 } from "@/server/req/requestApis";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useGetRequestId(): any {
	const { data, isLoading, isError, isSuccess, refetch } = useQuery({
		queryKey: ["getRequestId"],
		queryFn: () => publicApiWebsite2.getRequestId(),
		enabled: false,
	});

	const navigate = useNavigate();

	useEffect(() => {
		if (isError) toast.error("Error!", { description: "Something went wrong" });
		else if (isSuccess && data?.request_id)
			navigate("/dashboard/admission", { state: data?.request_id });
	}, [isError, isSuccess, data, navigate]);

	const handleClick = () => {
		const storedRequestId = localStorage.getItem("REQUEST_ID");
		if (storedRequestId) {
			navigate("/dashboard/admission/success");
		} else {
			refetch().then(() => {
				if (data?.request_id) {
					toast.success("Request ID generated successfully!");
					localStorage.setItem("REQUEST_ID", data.request_id);
					navigate("/dashboard/admission", { state: data.request_id });
				}
			});
		}
	};

	return { handleClick, isLoading };
}

// Offline support
// navigator.serviceWorker.ready.then((registration) => {
//   registration.sync.register("requestId").then(() => {
//     console.log("Request ID synced successfully");
//   });
// });
