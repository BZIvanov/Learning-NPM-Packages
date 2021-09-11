const { Schema, model } = require('mongoose');

const credentialsSchema = new Schema(
  {
    accessToken: { type: String }, // from JIRA's endpoint /oauth/token
    scope: { type: String }, // from JIRA's endpoint /oauth/token
    expiresIn: { type: String }, // from JIRA's endpoint /oauth/token
    cloudID: { type: String }, // from JIRA's endpoint token/accessible-resources, this is the id which is not unique
    name: { type: String, unique: true }, // from JIRA's endpoint token/accessible-resources
    avatarUrl: { type: String }, // from JIRA's endpoint token/accessible-resources
  },
  { timestamps: true }
);

module.exports = model('Credentials', credentialsSchema);
