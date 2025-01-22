// client side component
"use client";

// react
import { useReducer, useState } from "react";

// validator
import validator from "validator";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// components
import CallToActionButton from "@/components/assets/CallToActionButton";
import AlertContainer from "../assets/AlertContainer";

// toastify
import { toast } from "react-toastify";

// initial form state
const initialState = {
	name: "",
	email: "",
	message: ""
};

// name validator function
const validateFullName = (name) => {
	const trimName = validator.trim(name);
	if (!validator.isLength(trimName, { min: 1 })) return false;
	else return true;
};

// email validator function
const validateEmail = (email) => {
	const trimEmail = validator.trim(email);
	if (!validator.isEmail(trimEmail)) return false;
	else return true;
};

// message validator function
const validateMessage = (message) => {
	const trimMessage = validator.trim(message);
	if (!validator.isLength(trimMessage, { min: 3 })) return false;
	else return true;
};

// reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_NAME":
			return { ...state, name: action.payload.name };
		case "UPDATE_EMAIL":
			return { ...state, email: action.payload.email };
		case "UPDATE_MESSAGE":
			return { ...state, message: action.payload.message };
		case "CLEAR":
			return initialState;
		default:
			return { ...state };
	}
};

const ContactForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [isProcessing, setIsProcessing] = useState(false);

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		const nameIsValid = validateFullName(state.name);
		const emailIsValid = validateEmail(state.email);
		const messageIsValid = validateMessage(state.message);

		// invalid form criteria; exit function if true
		if (!nameIsValid || !emailIsValid || !messageIsValid) {
			return;
		}

		// add a spinner and disable the send button
		setIsProcessing(() => true);

		// post to api serverless function
		try {
			const res = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(state)
			});

			// if successful response
			if (res.status === 200) {
				console.log("Email sent successfully");
				toast(
					<p className="text-center sm:text-sm lg:text-lg p-4 text-secondary">
						Thank-you for reaching out! I will get back to you
						shortly!
					</p>,
					{
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
						theme: "dark"
						// transition: Flip
					}
				);
			}

			// if validation error response
			if (res.status === 400) {
				console.error("Could not process email");
				toast(
					<p className="text-center sm:text-sm lg:text-lg p-4 text-secondary">
						The server could not process your submission.
						Please try again later.
					</p>,
					{
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
						theme: "dark"
						// transition: Flip
					}
				);
			}

			// if general server error
			if (res.status === 500) {
				console.error("Server error");
				toast(
					<p className="text-center sm:text-sm lg:text-lg p-4 text-secondary">
						The server encountered an unexpected error. Please
						try again later.
					</p>,
					{
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: false,
						draggable: false,
						progress: undefined,
						theme: "dark"
						// transition: Flip
					}
				);
			}
		} catch (error) {
			console.error(`General error\n${error}`);
			toast(
				<p className="text-center sm:text-sm lg:text-lg p-4 text-secondary">
					There has been an error. Please try again later.
				</p>,
				{
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: false,
					draggable: false,
					progress: undefined,
					theme: "dark"
					// transition: Flip
				}
			);
		} finally {
			// reset the contact form state
			dispatch({ type: "CLEAR" });

			// reset send button to default
			setIsProcessing(() => false);
		}
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			id="contact-form"
			className={
				"container flex flex-col p-4 gap-y-6 text-foreground dark:text-background text-xl bg-background dark:bg-slate-600 shadow-xl shadow-primary_tint_2 dark:shadow-primary_tint_3"
			}>
			<div className="flex flex-col content-center gap-x-2 text-left">
				<label
					htmlFor="contact-full-name"
					className="font-bold mb-2">
					Name
				</label>
				<input
					value={state.name}
					onChange={(e) =>
						dispatch({
							type: "UPDATE_NAME",
							payload: { name: e.target.value }
						})
					}
					className="border border-primary p-2 dark:bg-foreground dark:text-background"
					placeholder="Full Name"
					maxLength="100"
					required
					aria-required="true"
					type="text"
					name="contact-full-name"
					id="contact-full-name"
				/>
			</div>
			<div className="flex flex-col content-center gap-x-2 text-left">
				<label
					htmlFor="contact-email"
					className="font-bold mb-2">
					Your Email
				</label>
				<input
					value={state.email}
					onChange={(e) =>
						dispatch({
							type: "UPDATE_EMAIL",
							payload: { email: e.target.value }
						})
					}
					className="border border-primary p-2 dark:bg-foreground dark:text-background"
					placeholder="example@domain.com"
					maxLength="100"
					required
					aria-required="true"
					type="email"
					id="contact-email"
					name="contact-full-name"
				/>
			</div>
			<div className="flex flex-col content-center gap-x-2 text-left">
				<label
					htmlFor="contact-message"
					className="font-bold mb-2">
					Message
				</label>
				<textarea
					value={state.message}
					onChange={(e) =>
						dispatch({
							type: "UPDATE_MESSAGE",
							payload: { message: e.target.value }
						})
					}
					className="border border-primary p-2 dark:bg-foreground dark:text-background"
					form="contact-form"
					name="contact-message"
					id="contact-message"
					rows="8"
					required
					minLength="3"
					aria-required="true"
					placeholder="How can I help you?"
				/>
			</div>
			<div className="justify-center">
				<CallToActionButton
					width={"md:w-1/3"}
					disabled={isProcessing ? true : false}>
					<div className="flex justify-center items-center gap-x-2">
						{isProcessing ? (
							<FontAwesomeIcon
								icon={faSpinner}
								className="w-6 h-6 animate-spin"
							/>
						) : (
							<FontAwesomeIcon
								icon={faEnvelope}
								className="w-6 h-6"
							/>
						)}
						{isProcessing ? <p>Sending...</p> : <p>Send</p>}
					</div>
				</CallToActionButton>
				<AlertContainer type="contact-form" />
			</div>
		</form>
	);
};

export default ContactForm;
