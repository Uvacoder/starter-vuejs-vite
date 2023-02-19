<template>
    <div :class="$style.container">
        <h1 :class="$style.title">
            👋 Hi there!
        </h1>
        <p :class="$style.count">
            {{ count }}
        </p>
        <div class="space-x-2">
            <Button @click="increment">
                Increment
            </Button>
            <Button @click="clear">
                Clear
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {storeToRefs} from 'pinia';
import {useMainStore} from '@/store/main';
import Button from '@/components/Button.vue';

const store = useMainStore();
const {increment, clear} = store;
const {count} = storeToRefs(store);
</script>

<style module>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    vertical-align: middle;
    margin-top: 20vh;
}

.count {
    font-size: 3em;
    line-height: 2em;
}

.title {
    font-weight: normal;
    font-size: 3em;
}
</style>
