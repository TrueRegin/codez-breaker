<template>
    <div id="app">
        <h1 id="title">Hello World</h1>
        <main role="main" id="content">
            <Translator v-for="encryption in $encryptions" :key="encryption" :encode="encryption.encode" :decode="encryption.decode">
                <template v-slot:title>{{encryption.title}}</template>
            </Translator>
        </main>
    </div>
</template>

<script>
import Translator from "./components/Translator.vue";
export default {
    components: {
        Translator,
    },
};
</script>

<style lang="scss">
html,
body,
#app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

body {
    margin: 0;
}

html {
    font-size: 16px;
}

#title {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    border-radius: 9px;
    color: #3e4385;
    box-sizing: border-box;
    padding: 20px;
    margin: 0;
}

#content {
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    height: 100%;
}
</style>
