<template>
    <div class="translator">
        <div class="title">
            <slot name="title"></slot>
        </div>
        <textarea @input="runDecode" class="decoder" placeholder="Decoder" v-model="encryptedData"></textarea>
        <textarea @input="runEncode" class="encoder" placeholder="Encoder" v-model="rawData"></textarea>
        <button class="clear-button" @click="clearData">Clear Input</button>
    </div>
</template>

<script>
export default {
    data: () => ({
        encryptedData: "",
        rawData: "",
    }),
    props: {
        encode: Function,
        decode: Function,
    },
    methods: {
        runEncode() {
            this.encryptedData = this.encodedData;
        },
        runDecode() {
            this.rawData = this.decodedData;
        },
        clearData() {
            this.rawData = "";
            this.encryptedData = "";
        },
    },
    computed: {
        decodedData() {
            return this.decode(this.encryptedData);
        },
        encodedData() {
            return this.encode(this.rawData);
        },
    },
};
</script>

<style lang="scss">
.translator {
    display: grid;
    grid-template-areas: "title title" "decoder encoder" "clear clear";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content max-content;
    gap: 20px;
    padding: 20px;

    box-sizing: border-box;

    .title {
        grid-area: title;
        font-size: 1.5em;
        font-family: Montserrat;
        text-align: center;
    }

    textarea {
        width: 100%;
        resize: vertical;
        min-height: 150px;
        box-sizing: border-box;
        box-shadow: 0 6px 12px #0005;
        border-radius: 5px;
        display: grid;
        text-align: center;
    }
    .encoder {
        grid-area: encoder;
    }
    .decoder {
        grid-area: decoder;
    }

    .clear-button {
        grid-area: clear;
        background: #f35;
        color: #511;
        border: none;
        border-radius: 5px;
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>