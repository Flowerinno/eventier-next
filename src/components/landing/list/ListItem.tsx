import React, { useRef, useState } from "react";
import styles from "./ListItem.module.scss";
import { useDraggable } from "@dnd-kit/core";
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";

interface ItemPropsI {
  name: string;
  id: number;
  currentState: string;
}
type DropdownVariants = "error" | "warning" | "success";

const ListItem = ({ name, id, currentState }: ItemPropsI) => {
  const input = useRef(null);
  let currentColor: DropdownVariants = "success";
  currentState === "todo" && (currentColor = "error");
  currentState === "inProcess" && (currentColor = "warning");
  currentState === "done" && (currentColor = "success");
  const [openDetails, setOpenDetails] = useState(false);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      currentState,
    },
    disabled: name === "",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className={styles.listItem}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      title="drag and drop"
    >
      <Dropdown disableTriggerPressedAnimation isBordered>
        <Dropdown.Button
          flat
          color={currentColor}
          size='md'
		  iconRight={currentState == 'todo'}
          css={{ width: "90%", d: "flex", flexWrap: "wrap", alignItems: 'center',
		  justifyContent: 'center' }}
        >
          {name}
        </Dropdown.Button>
        {currentState !== "todo" && (
          <Dropdown.Menu
            aria-label="Dynamic Actions"
            containerCss={{ width: "50px" }}
          >
            <Dropdown.Item key={Math.random()}>User</Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

export default ListItem;
