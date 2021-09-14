const { Schema, model } = require('mongoose');

const credentialsSchema = new Schema(
  {
    code: { type: String },
    state: { type: String },
    refreshToken: { type: String },
    accessToken: { type: String },
    siteId: { type: String },
  },
  { timestamps: true }
);

module.exports = model('Credentials', credentialsSchema);
