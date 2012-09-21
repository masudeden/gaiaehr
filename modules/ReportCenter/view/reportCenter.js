/**
 * reportCenter.js
 * Report Center Panel
 *
 * This class renders all the panel used inside the Report Center Panel
 *
 * v0.1.0
 *
 * Author: Gino Rivera Falú (GI Technologies)
 *
 * GaiaEHR (Electronic Health Records) 2012
 *
 */
Ext.define('Modules.ReportCenter.view.reportCenter',
{
    extend              : 'App.classes.RenderPanel',
    id                  : 'panelClientListReport',
    pageTitle           : i18n['reportCenter'],
    initComponent		: function() 
    {
        var me = this;
        me.pageBody = [
        {
        	xtype	: 'panel',
        	layout	: 'fit',
			loader	: 
			{
				autoLoad	: true,
				scripts		: true,
				url			: 'modules/ReportCenter/data/reportCenterLayout.php',
				contentType	: 'html',
				loadMask	: true
			}
        }
        ];
        me.callParent(arguments);

	},
	/**
	 * This function is called from app.js when
	 * this panel is selected in the navigation panel.
	 * place inside this function all the functions you want
	 * to call every this panel becomes active
	 */
	onActive: function(callback) 
	{
		callback(true);
	}
});