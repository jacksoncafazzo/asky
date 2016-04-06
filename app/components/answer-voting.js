import Ember from 'ember';

export default Ember.Component.extend({
  voteUp: Ember.computed('answer.votes', function() {
    var votes = this.get('answer.votes');
    console.log("this is the votes", votes);
    return this.get('answer.votes');
  }),
  showVotes: true,
  actions: {
    showVotes() {
      this.set('showVotes', true);
    },
    hideVotes() {
      this.set('showVotes', false);
    },

    upVote(answer) {
      var votes = this.get('answer.votes');
      if (isNaN(votes)) {
        votes = 0;
      }
      var params = {
        votes: votes + 1
      };
      this.set('showVotes', true);
      this.sendAction('vote', answer, params);
    },
    downVote(answer) {
      if (isNaN(votes)) {
        votes = 0;
      }
      var votes = this.get('answer.votes');
      var params = {
        votes: votes - 1
      };
      this.set('showVotes', true);
      this.sendAction('vote', answer, params);
    }
  }
});
