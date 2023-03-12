import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import Link from "next/link";
interface loginFormTypes {
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
	} = useForm<loginFormTypes>();
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const loginHandler = ({
		firstName,
		lastName,
		email,
		password,
	}: loginFormTypes) => {
		console.log(firstName, lastName, email, password);
	};

	return (
		<div className={styles.login_container}>
			<Link href="/" className={styles.login_logo}>
				Eventier
			</Link>

			<div className={styles.login_wrapper}>
				<form action="submit" onSubmit={handleSubmit(loginHandler)}>
					<input
						type="text"
						{...register("firstName", { required: true })}
						placeholder="First name"
					/>
					<input
						type="text"
						{...register("lastName", { required: true })}
						placeholder="Last Name"
					/>
					<input
						type="text"
						{...register("email", { required: true })}
						placeholder="Email"
					/>
					<input
						type={passwordIsVisible ? "text" : "password"}
						{...register("password", { required: true })}
						placeholder="Password"
					/>
				</form>
				<div className={styles.login_buttons}>
					<Link href="/">Login</Link>
					<span>
						Already a member? <Link href="/">Sign up</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
