/** @jsx h */
/** @type {import('twind').Configuration} */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
    return (
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <img src="/logo.svg" height="100px" alt="the fresh logo: a sliced lemon dripping with juice" />
            <p class={tw`my-6`}>
                Welcome to <span class={tw`text-yellow-500 font-black`}>`fresh`</span>. Try updating this message in the ./routes/index.tsx file, and refresh.
            </p>
            <Counter start={3} />
        </div>
    );
}
