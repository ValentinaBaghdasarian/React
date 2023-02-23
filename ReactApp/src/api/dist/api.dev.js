"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileAPI = exports.authAPI = exports.followAPI = exports.usersAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = 'https://social-network.samuraijs.com/api/1.0/';

var instance = _axios["default"].create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '0460488a-b442-4753-9c39-83ab9ef19369'
  }
});

var usersAPI = {
  getUsers: function getUsers(currentPage, usersCount) {
    return instance.get("users?page=".concat(currentPage, "&count").concat(usersCount)).then(function (response) {
      return response.data;
    });
  }
};
exports.usersAPI = usersAPI;
var followAPI = {
  getUnfollow: function getUnfollow(id) {
    return instance["delete"]("follow/".concat(id));
  },
  getFollow: function getFollow(id) {
    return instance.post("follow/".concat(id));
  }
};
exports.followAPI = followAPI;
var authAPI = {
  getAuth: function getAuth() {
    return instance.get('auth/me');
  }
};
exports.authAPI = authAPI;
var profileAPI = {
  getProfile: function getProfile(userId) {
    return instance.get('profile/' + userId);
  },
  getStatus: function getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus: function updateStatus(status) {
    return instance.put('profile/status', {
      status: status
    });
  }
};
exports.profileAPI = profileAPI;