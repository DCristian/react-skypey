"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences
const faker = require("faker"); // faker is used for generating random fake data.
const _ = require("lodash"); // lodash is a utility lib for Javascript
exports.user = generateUser();
const users = generateUsers(10);
exports.contacts = _.mapKeys(users, "user_id");
exports.getMessages = (messagesPerUser) => {
    let messages = {};
    _.forEach(users, (user) => {
        messages[user.user_id] = Object.assign({}, _.mapKeys(generateMsgs(messagesPerUser), "number"));
    });
    return messages;
};
/*
// just an example of how the state object is structured
export const state = {
    user: generateUser(),
    messages: getMessages(10),
    typing: "",
    contacts,
    activeUserId: null
};
*/
/**
 * @returns {Object} - a new user object
 */
function generateUser() {
    return {
        name: faker.name.findName(),
        email: faker.internet.email(),
        profile_pic: faker.internet.avatar(),
        status: txtgen.sentence(),
        user_id: shortid.generate()
    };
}
exports.generateUser = generateUser;
/**
 * @returns {Object} - a new message object
 */
function generateMsg(number) {
    return {
        number,
        text: txtgen.sentence(),
        is_user_msg: faker.random.boolean()
    };
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers) {
    return Array.from({ length: numberOfUsers }, () => generateUser());
}
function generateMsgs(numberOfMsgs) {
    return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}
//# sourceMappingURL=static-data.js.map