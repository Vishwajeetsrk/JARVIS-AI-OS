( function( api ) {

	// Extends our custom "education-way" section.
	api.sectionConstructor['education-way'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );
