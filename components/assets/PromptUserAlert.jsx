// client side component
"use client";

// react
import { useRef } from "react";

// components
import CallToActionButton from "@/components/assets/CallToActionButton";
import AlertContainer from "./AlertContainer";

// toastify
import { toast } from "react-toastify";

const PromptUserAlert = () => {
	const toastId = useRef(null);

	const closeToast = () => toast.dismiss();

	const content = (
		<div className="flex flex-col text-center sm:text-sm lg:text-lg">
			<p className="py-4">
				Are you sure you want to download my resume as a pdf?
			</p>
			<div className="flex flex-row justify-evenly">
				<a
					href="/downloads/paul_mcjannet_resume.pdf"
					download
					onClick={closeToast}
					aria-label="Download Paul McJannet's resume"
					className="font-mono bg-primary text-background py-2 px-4 rounded hover:opacity-90 cursor-pointer">
					Yes
				</a>
				<button
					className="font-mono bg-line text-foreground py-2 px-4 rounded hover:opacity-90 cursor-pointer"
					onClick={closeToast}>
					No
				</button>
			</div>
		</div>
	);

	const notify = () => {
		if (!toast.isActive(toastId.current)) {
			toastId.current = toast(content, {
				position: "top-center",
				hideProgressBar: true,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: false,
				theme: "dark"
				// transition: Flip
			});
		}
	};

	return (
		<>
			<CallToActionButton handleOnClick={notify}>
				./download-resume
			</CallToActionButton>
			<AlertContainer />
		</>
	);
};

export default PromptUserAlert;
