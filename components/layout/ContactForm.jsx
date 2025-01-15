// client side component
"use client";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// react
import { useReducer, useEffect } from "react";

// validator
import validator from "validator";

// components
import CallToActionButton from "../assets/CallToActionButton";

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

	useEffect(() => {
		// Log state after it has been updated (after re-render)
		console.log("State after re-render:", state);
	}, [state]);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		const nameIsValid = validateFullName(state.name);
		const emailIsValid = validateEmail(state.email);
		const messageIsValid = validateMessage(state.message);

		// invalid form criteria
		if (!nameIsValid || !emailIsValid || !messageIsValid) {
			return;
		}

		// TODO: send to my email and if it reaches my inbox (can i make sure anything from my website once set up is not spam?) with a good response, then
		// TODO: alert user that email was sent successfully (otherwise an alter that the email could not be sent needs to show)

		// reset the contact form state
		dispatch({ type: "CLEAR" });
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			id="contact-form"
			className={
				"container flex flex-col p-4 gap-y-6 text-xl bg-white shadow-xl shadow-primary_tint_2"
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
					className="border border-primary p-2"
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
					className="border border-primary p-2"
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
					className="border border-primary p-2"
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
				<CallToActionButton width={"w-1/2 md:w-1/3"}>
					<div className="flex justify-center items-center gap-x-2">
						<FontAwesomeIcon
							icon={faEnvelope}
							className="w-6 h-6"
						/>
						<p>Send</p>
					</div>
				</CallToActionButton>
			</div>
		</form>
	);
};

export default ContactForm;
