const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newBird = this.createBird(evt.target);
  PubSub.publish( 'FormView:new-sighting', newBird );
  evt.target.reset();
};

SightingFormView.prototype.createBird = function (form) {
  const newBird = {
    "species": form.species.value,
    "location": form.location.value,
    "date": form.date.value
  };
  return newBird;
};

module.exports = SightingFormView;
