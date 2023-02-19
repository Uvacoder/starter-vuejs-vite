<template>
    <nav :class="$style.container">
        <router-link to="/">
            <h1 :class="$style.title">
                Vite Vue TS starter
            </h1>
        </router-link>
    </nav>
</template>

<style module>
.container {
    display: flex;
    background-color: #ecf0f1;
    align-items: center;
}

.container>* {
    padding: 1em;
    display: inline-block;
    font-size: 1em;
}

.title {
    font-size: 1.1em;
    color: black;
    font-weight: normal;
}

.container>*:first-child {
    font-weight: 400;
    margin-right: auto;
    font-size: 1.2em;
}
</style>
