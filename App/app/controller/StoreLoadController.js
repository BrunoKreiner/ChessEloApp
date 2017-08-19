/*
 * File: app/controller/StoreLoadController.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Enif.controller.StoreLoadController', {
    extend: 'Ext.app.Controller',

    id: 'storeLoadController',

    reloadAllStores: function() {
        let gamesStore = Ext.getStore("GameRawData");

        gamesStore.load({
            callback: function (records, operation, success) {
                Ext.getStore("GameRawData").clearFilter();
                Ext.getStore("PlayerData").load();
                Ext.getStore("pivot.HeatMap").load();
            }
        });



    },

    /* TODO: Figure out the best way to use global variables */
    getServiceUrl: function() {

        let isTesting = false,
            serviceUrl = isTesting ? '' : '192.168.88.176:8181';

        return serviceUrl;
    },

    getPlayerName: function(id) {
        const store = Ext.getStore('PlayerData'),
            recordPos = store.find('uid', id),
            rc = store.getAt(recordPos);

        if(rc){
            return rc.get('name');
        } else {
            console.error("Did not found ", id);
            return "Error";
        }
    }

});