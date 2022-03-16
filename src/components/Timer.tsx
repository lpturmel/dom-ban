import { Component, createSignal, createEffect } from "solid-js";
import { format } from "../helpers/timer";

interface TimerProps {
    date: number;
}
const Timer: Component<TimerProps> = (props) => {
    const [time, setTime] = createSignal(props.date);

    createEffect(() => {
        setInterval(() => {
            setTime(props.date);
        }, 1000);
    });
    return (
        <p class="text-3xl w-60 text-[#F4B73F] font-bold">{format(time())}</p>
    );
};
export default Timer;
