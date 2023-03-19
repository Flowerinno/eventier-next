import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

import * as yup from "yup";
export const loginSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
});


export interface LoginFormTypes {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

const Login: React.FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<LoginFormTypes>({
		resolver: yupResolver(loginSchema),
	});
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const loginHandler = ({
		firstName,
		lastName,
		email,
		password,
	}: LoginFormTypes) => {};

	return (
		<div className={styles.login_container}>
			<Link href="/" className={styles.login_logo}>
				Eventier <h4>Login</h4>
			</Link>

			<div className={styles.login_wrapper}>
				<form action="submit" onSubmit={handleSubmit(loginHandler)}>
					<p>{!errors.email?.message ? null : errors.email?.message}</p>
					<input
						type="text"
						{...register("email", { required: true })}
						placeholder="Email*"
					/>
					<p>{!errors.password?.message ? null : errors.password?.message}</p>
					<input
						type={passwordIsVisible ? "text" : "password"}
						{...register("password", { required: true })}
						placeholder="Password*"
					/>
					<div className={styles.login_buttons}>
						<Tooltip
							content={"Development in process"}
							css={{ width: "inherit" }}
						>
							<Link href="/">Login</Link>
						</Tooltip>
						<Tooltip content={"Development in process"}>
							<Link href="/signup">Sign up</Link>
						</Tooltip>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
