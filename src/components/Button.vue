<template>
    <button
        class="inline-flex rounded px-4 py-2"
        font="medium"
        outline="1 blue-500"
        bg="slate-50"
    >
        <slot />
    </button>
</template>

<style>
.button {
    display: inline-flex;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    margin: 0 5px;
}

.button:focus,
.button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
    .button {
        background-color: #f9f9f9;
    }
}
</style>
