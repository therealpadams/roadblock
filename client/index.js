// Classes for handling each type of data from github
const Organisation = require('./organisation.js');
const Repository = require('./repository.js');
const Member = require('./member.js');
const Collaborator = require('./collaborator.js');
const PullRequest = require('./pullrequest.js');
const Commit = require('./commit.js');
const Contribution = require('./contribution.js');
const Issue = require('./issue.js');
const CommunityProfile = require('./communityprofile.js');
const ExternalContribution = require('./externalcontribution.js');
const Topic = require('./topic.js');

module.exports = function(github, database, reset = false) {
  var s = {};

  // Initialize the clients for each individual github api object
  s.Organisation = new Organisation(github, database);
  s.Organisation.define();

  s.Repository = new Repository(github, database);
  s.Repository.define();

  s.Member = new Member(github, database);
  s.Member.define();

  s.Collaborator = new Collaborator(github, database);
  s.Collaborator.define();

  s.PullRequest = new PullRequest(github, database);
  s.PullRequest.define();

  s.Commit = new Commit(github, database);
  s.Commit.define();

  s.Contribution = new Contribution(github, database);
  s.Contribution.define();

  s.Issue = new Issue(github, database);
  s.Issue.define();

  s.CommunityProfile = new CommunityProfile(github, database);
  s.CommunityProfile.define();

  s.ExternalContribution = new ExternalContribution(github, database);
  s.ExternalContribution.define();

  s.Topic = new Topic(github, database);
  s.Topic.define();

  // finally sync the database so all schemas are in place
  s.Repository.sync(reset);
  s.Member.sync(reset);
  s.Organisation.sync(reset);
  s.Collaborator.sync(reset);
  s.PullRequest.sync(reset);
  s.Commit.sync(reset);
  s.Contribution.sync(reset);
  s.Issue.sync(reset);
  s.ExternalContribution.sync(reset);
  s.Topic.sync(reset);

  database.sync({ force: reset });
  return s;
};
