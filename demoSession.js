if (Meteor.isClient) {
	Template.itemList.itemList = function() {
		return [{
			text: 'Barbapapa'
		}, {
			text: 'Barbamama'
		}, {
			text: 'Barbabulle'
		}];
	}

	Template.itemList.selected = function() {
		return Session.equals('selectedItem', this.text) ? 'selected' : '';
	}

	Template.itemList.events({
		'click .item': function(e, templ) {
			Session.set('selectedItem', this.text);
		}
	});

	Template.itemDisplay.selectedItem = function() {
		return Session.get('selectedItem');
	}
}