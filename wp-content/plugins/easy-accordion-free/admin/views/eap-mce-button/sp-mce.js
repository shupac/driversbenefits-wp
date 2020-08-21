(function() {
	tinymce.PluginManager.add('sp_mce_button', function( editor, url ) {
		editor.addButton('sp_mce_button', {
			text: false,
            icon: false,
            image: url + '/ea-icon.svg',
            tooltip: 'Easy Accordion',
            onclick: function () {
                editor.windowManager.open({
                    title: 'Insert Shortcode',
					width: 400,
					height: 100,
					body: [
						{
							type: 'listbox',
							name: 'listboxName',
                            label: 'Select Shortcode',
							'values': editor.settings.spShortcodeList
						}
					],
					onsubmit: function( e ) {
						editor.insertContent( '[sp_easyaccordion id="' + e.data.listboxName + '"]');
					}
				});
			}
		});
	});
})();