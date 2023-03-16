import React, { useState } from "react";
import styles from "./List.module.scss";
import { IconContext } from "react-icons";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import ListItem from "./ListItem";

interface ListPropsI {
  list: {
    name: string;
    state: string;
    id: number;
  }[];
  currentState: string;
  disableHandler: () => void;
}

const List = ({ list, currentState, disableHandler }: ListPropsI) => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div>
      {list
        .filter((item) => {
          return item.state === currentState;
        })
        .map((item, index) => {
          return (
            <ul key={index}>
              <li className={styles.list}>
                <ListItem
                  name={item.name}
                  id={item.id}
                  currentState={currentState}
                  disabled={item.disabled}
                />
                <span onClick={() => disableHandler(item.id)}>
                  <IconContext.Provider
                    value={{
                      size: "1.5em",
                      color: !item.disabled ? "green" : "red",
                    }}
                  >
                    {item.disabled === true ? <AiFillLock /> : <AiFillUnlock />}
                  </IconContext.Provider>
                </span>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default List;
