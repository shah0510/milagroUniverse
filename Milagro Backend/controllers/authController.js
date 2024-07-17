const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res) => {
  // registration logic
};

exports.login = async (req, res) => {
  // login logic
};

exports.forgotPassword = async (req, res) => {
  // forgot password logic
};

exports.resetPassword = async (req, res) => {
  // reset password logic
};
