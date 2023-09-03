"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.details = void 0;
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
var details = function () { return ({
    name: 'Check Video Resolution',
    description: 'Check is video is 480p,576p,720p,1080p,1440p,4KUHD,DCI4K,8KUHD,Other',
    style: {
        borderColor: 'orange',
    },
    tags: 'video',
    isStartPlugin: false,
    pType: '',
    requiresVersion: '2.11.01',
    sidebarPosition: -1,
    icon: 'faQuestion',
    inputs: [],
    outputs: [
        {
            number: 1,
            tooltip: 'File is 480p',
        },
        {
            number: 2,
            tooltip: 'File is 576p',
        },
        {
            number: 3,
            tooltip: 'File is 720p',
        },
        {
            number: 4,
            tooltip: 'File is 1080p',
        },
        {
            number: 5,
            tooltip: 'File is 1440p',
        },
        {
            number: 6,
            tooltip: 'File is 4KUHD',
        },
        {
            number: 7,
            tooltip: 'File is DCI4K',
        },
        {
            number: 8,
            tooltip: 'File is 8KUHD',
        },
        {
            number: 9,
            tooltip: 'File is Other',
        },
    ],
}); };
exports.details = details;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var plugin = function (args) {
    var lib = require('../../../../../methods/lib')();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-param-reassign
    args.inputs = lib.loadDefaultValues(args.inputs, details);
    return {
        outputFileObj: args.inputFileObj,
        outputNumber: 1,
        variables: args.variables,
    };
};
exports.plugin = plugin;
