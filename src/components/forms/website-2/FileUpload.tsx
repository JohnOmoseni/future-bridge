import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Envelope as UploadIcon } from "@/constants/icons";
import { cn } from "@/lib/utils";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
	title: string;
	name?: string;
	accept?: string;
	type?: string;
	sizeLimit?: number;
	fileObject?: File | null;
	onFileChange?: (file: File | null) => void; // Callback when file is selected
};

function FileUpload({
	title,
	name,
	accept = "image/*",
	type = "image",
	sizeLimit,
	onFileChange,
}: Props) {
	const [file, setFile] = useState<File | null>(null);
	const [isUploading, setIsUploading] = useState(false);

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];

		//console.log(selectedFile);
		if (selectedFile) {
			if (!selectedFile.type.startsWith(accept.split("/")[0])) {
				alert(`Please select a valid file type (${accept}).`);
				toast.warning(`Please select a valid file type (${accept}).`);
				return;
			}

			if (sizeLimit && selectedFile.size > sizeLimit * 1024 * 1024) {
				alert(`File size must be less than ${sizeLimit}MB.`);
				toast.warning(`File size must be less than ${sizeLimit}MB.`);
				return;
			}

			setIsUploading(true);
			setFile(selectedFile);
			onFileChange?.(selectedFile);
		}
	};

	useEffect(() => {
		if (isUploading && file) {
			setIsUploading(false);
		}
	}, [file, isUploading]);

	let acceptLabel;
	switch (type) {
		case "video":
			acceptLabel = ".mp4 .av4";
			break;
		case "image":
			acceptLabel = ".jpg .jpeg .png .gif";
			break;
		default:
			acceptLabel = ".jpg .jpeg .png .gif";
	}

	return (
		<div className="my-2 w-full">
			<div className="w-full">
				<div className="flex-column gap-2">
					<Label className="text-base w-max relative font-medium after:absolute after:content-['*'] after:-right-2 after:text-red-500 after:-top-1 after:text-lg">
						{title}
					</Label>

					<div
						className={cn(
							"w-full flex-column items-center justify-center gap-2 border border-border min-h-[100px] rounded-md overflow-hidden border-dashed",
							type !== "image" && "py-4 px-3"
						)}
					>
						<Input
							id={name}
							type="file"
							accept={accept}
							onChange={(event) => handleFileChange(event)}
							className="hidden"
						/>
						<Label htmlFor={name} className=" ">
							{file ? (
								type === "image" ? (
									<div className="h-40">
										<img
											src={URL.createObjectURL(file)}
											alt={file.name}
											className="object-cover w-full h-full rounded-md"
										/>
									</div>
								) : (
									<div className="mt-2">
										<p className="text-sm text-center font-semibold">{`File Name: ${file.name}`}</p>
										<p className="text-sm text-center">{`File Size: ${(
											file.size /
											1024 /
											1024
										).toFixed(2)} MB`}</p>
										<p className="text-sm text-center">{`Upload Date: ${new Date(
											file.lastModified
										).toLocaleDateString()}`}</p>
										<p className="text-sm text-center">{`Upload Time: ${new Date(
											file.lastModified
										).toLocaleTimeString()}`}</p>
									</div>
								)
							) : (
								<div className="flex-column items-center">
									<div className="row-flex-start gap-2">
										<UploadIcon size={20} className="" />

										<span className="text-sm text-grey capitalize">
											{isUploading ? "Uploading..." : `Upload ${type}`}
										</span>
									</div>
									<p className="text-sm text-grey uppercase">
										Accepted formats: {acceptLabel} etc.
									</p>
								</div>
							)}
						</Label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FileUpload;
