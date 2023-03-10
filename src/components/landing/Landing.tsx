import React, { useState } from "react";
import styles from "./Landing.module.scss";
import Link from "next/link";
import Head from "next/head";
import { Button, Spacer } from "@nextui-org/react";
import { landingData } from "./data";
import { DndContext } from "@dnd-kit/core";
import Droppable from "../dnd/droppable/Droppable";
import { ListI } from "@/types/landingTypes/LandingTypes";
import {
	ListHandler,
	addItemToList,
	findLatestIdInList,
} from "@/utils/ListUtil";
import List from "./list/List";

const Landing: React.FC = (): JSX.Element => {
	const [list, setList] = useState<ListI[]>(landingData);

	const handleDragEnd = ({ active, over }: any) => {
		if (over !== null) {
			setList(ListHandler(list, active.id, over.id));
		}
	};
	const addItemHandler = () => {
		setList((prevList) =>
			addItemToList(prevList, findLatestIdInList(prevList))
		);
	};
	return (
		<div className={styles.landing_container}>
			{" "}
			<Head>
				<title>Eventier landing</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<header className={styles.header_landing}>
				<div>
					<h2 className={styles.landing_logoText}>
						Plan the schedule with your team using Eventier!
					</h2>
					<p style={{ padding: "5px", fontSize: "90%" }}>
						Simply drag and drop your tasks, try yourself!
					</p>
				</div>

				<div className={styles.regButtons_landing}>
					<Link href="/login">Login</Link>
					<Spacer x={0.5} />
					<Link href="/signup">Signup</Link>
				</div>
			</header>
			<DndContext onDragEnd={handleDragEnd}>
				<main className={styles.main_landing}>
					<Droppable currentState="todo">
						<>
							<p className={styles.p_landing} style={{ color: "#DD485D" }}>
								To Do{" "}
								<button onClick={addItemHandler} title="Add new todo">
									+
								</button>
							</p>
							<List currentState="todo" list={list} />
						</>
					</Droppable>
					<Droppable currentState="inProcess">
						<>
							<p className={styles.p_landing} style={{ color: "#D3E039" }}>
								In Process
							</p>
							<List currentState="inProcess" list={list} />
						</>
					</Droppable>
					<Droppable currentState="done">
						<>
							<p className={styles.p_landing} style={{ color: "#3DCF29" }}>
								Done
							</p>
							<List currentState="done" list={list} />
						</>
					</Droppable>
				</main>
			</DndContext>
		</div>
	);
};

export default Landing;
