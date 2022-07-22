/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface Props {
    start: number;
}

export default function Counter(props: Props) {
    const [count, setCount] = useState(props.start);
    const btn = tw`px-2 py-1 border border-gray-300 hover:bg-gray-300 rounded-lg`;
    return (
        <div class={tw`flex gap-2 w-full`}>
            <p class={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
            <button class={btn} onClick={() => setCount(count - 1)} disabled={!IS_BROWSER}>
                -1
            </button>
            <button class={btn} onClick={() => setCount(count + 1)} disabled={!IS_BROWSER}>
                +1
            </button>
        </div>
    );
}
