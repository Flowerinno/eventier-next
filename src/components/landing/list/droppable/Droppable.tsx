import { useDroppable } from "@dnd-kit/core";

export function Droppable({ children, currentState }: any) {
	const { setNodeRef, over, isOver } = useDroppable({
		id: currentState,
	});
	console.log(isOver);
	return <div ref={setNodeRef}>{children}</div>;
}
