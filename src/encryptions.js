import morse from 'morse-code-encoder-and-decoder';
import binary from 'decode-encode-binary';
import base64 from 'base-64';
import hexEncoder from './encoders/hex';
import Vue from 'vue';

const $encryptions = [morse, binary, base64, hexEncoder];
const $keys = ['Morse', 'Binary', 'Base-64', 'Hexadecimal'];
Vue.prototype.$encryptions = $encryptions.map((encr, index) => {
    return {
        title: $keys[index],
        ...encr,
    };
});
