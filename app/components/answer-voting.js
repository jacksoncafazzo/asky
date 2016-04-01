import Ember from 'ember';

export default Ember.Component.extend({
  showVotes: true,
  actions: {
    showVotes() {
      this.set('showVotes', true);
    },
    hideVotes() {
      this.set('showVotes', false);
    },
    upVote(answer) {
      var votes = answer.votes + 1;
      var params = {
        answer: answer.answer,
        author: answer.author,
        posted: answer.posted,
        question: answer.question,
        votes: votes
      };
      this.set('showVotes', true);
      this.sendAction('vote', answer, params);
    },
    downVote(answer) {
      var votes = answer.votes - 1;
      var params = {
        answer: answer.answer,
        author: answer.author,
        posted: answer.posted,
        question: answer.question,
        votes: votes
      };
      this.set('showVotes', true);
      this.sendAction('vote', answer, params);
    }
  }
});
