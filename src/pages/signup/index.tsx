import React, { useState } from "react";
import styles from "./Signup.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { LoginFormTypes } from "../login/loginTypes";
import { signupSchema } from "./signup.schema";
import { Tooltip } from "@nextui-org/react";
const Login: React.FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormTypes>({
		resolver: yupResolver(signupSchema),
	});
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const signupHandler = ({
		firstName,
		lastName,
		email,
		password,
	}: LoginFormTypes) => {};

	return (
		<div className={styles.signup_container}>
			<Link href="/" className={styles.signup_logo}>
				Eventier <h4>Signup</h4>
			</Link>

			<div className={styles.signup_wrapper}>
				<form action="submit" onSubmit={handleSubmit(signupHandler)}>
					<p>{!errors.firstName?.message ? null : errors.firstName?.message}</p>
					<input
						type="text"
						{...register("firstName")}
						placeholder="First Name *"
					/>
					<p>{!errors.lastName?.message ? null : errors.lastName?.message}</p>
					<input
						type="text"
						{...register("lastName")}
						placeholder="Last Name *"
					/>
					<p>{!errors.email?.message ? null : errors.email?.message}</p>
					<input type="text" {...register("email")} placeholder="Email *" />
					<p>{!errors.password?.message ? null : errors.password?.message}</p>
					<input
						type={passwordIsVisible ? "text" : "password"}
						{...register("password")}
						placeholder="Password *"
					/>
					<div className={styles.signup_buttons}>
						<Tooltip content={"Development in process"}>
							<Link href="/login">Login</Link>
						</Tooltip>
						<Tooltip content={"Development in process"}>
							<Link href="/">Sign up</Link>
						</Tooltip>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
