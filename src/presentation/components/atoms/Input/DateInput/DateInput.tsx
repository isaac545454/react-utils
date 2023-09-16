import { forwardRef } from "react";
import { InputProps } from "../types";
import { styles } from "../styles";
import { AiFillCalendar } from "react-icons/ai";

export const Date = forwardRef<HTMLInputElement, InputProps>(
  ({ ...res }, ref) => {
    const randomId = String(Math.random());

    const openDatePicker = (randomId: string) => {
      const inputDateElement = document.getElementById(`${randomId}`);
      (inputDateElement as HTMLInputElement).showPicker();
    };

    return (
      <div className="relative">
        <input
          ref={ref}
          {...res}
          id={randomId}
          className={styles.Input}
          type="date"
          max="2030-01-01"
        />
        <div className={styles.icons} onClick={() => openDatePicker(randomId)}>
          <AiFillCalendar color="white" />
        </div>
      </div>
    );
  }
);
