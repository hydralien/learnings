Vue.component('anitem', {
	props: ['type'],
  template: '<li>This is a {{ type.text }}</li>',
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
		seen: false,
		geset: "a thing to get/set",
		watched: "",
		rewatched: "",
		glist: [
			{text: "loop"},
			{text: "hole"}
		],
  },
	methods: {
		clickhand: function () {
			console.log(this.message);
			this.message = "Oh no look a fishpig!";
			console.log(this.message);			
		},
		formSubmit: function () {
			window.alert("nope...");
		}
	},
	computed: {
		memessage: function () {
			return "meme " + this.message;
		},
		geseta: {
			get: function() {
				return self.geset;
			},
			set: function() {
				this.geset = "new shiny set";
			},
		}
	},
	watch: {
		watched: function (newThing, oldThing) {
			console.log('wacchha gonna do');
			this.rewatched = "I've seen many " + this.watched; // look for "debounced" at https://vuejs.org/v2/guide/computed.html for too frequent edits
		},
	},
})

