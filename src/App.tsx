import type { Component } from "solid-js";
import Timer from "./components/Timer";
import { getTimeDiff } from "./helpers/timer";
import Dom from "./dom.jpeg";

const App: Component = () => {
    return (
        <div class="h-full text-white container max-w-lg m-auto flex flex-col justify-center items-center pt-40">
            <p class="w-full font-semibold text-center">
                Time til Dominatrix...
            </p>
            <div class="flex flex-row bg-[#23252A] rounded-2xl p-4 justify-start items-center gap-4">
                <img src={Dom} class="w-20 h-20 rounded-2xl" />
                <Timer date={getTimeDiff()} />
            </div>
        </div>
    );
};

export default App;
