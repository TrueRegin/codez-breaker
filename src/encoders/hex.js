/**
 * ? Custom hex encoder
 */
import hex from 'hex-encode-decode';
import _ from 'lodash';

let hexTrimmer = /\s/g;
export default {
    encode(/** @type {string} */ input) {
        return hex.encode(_.replace(input, hexTrimmer, ''));
    },
    decode(/** @type {string} */ input) {
        return hex.decode(_.replace(input, hexTrimmer, ''));
    },
};
