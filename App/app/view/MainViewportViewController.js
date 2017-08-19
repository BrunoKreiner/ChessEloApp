/*
 * File: app/view/MainViewportViewController.js
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

Ext.define('Enif.view.MainViewportViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewport',

    requires: [
        'Ext.route.Route'
    ],

    routes: {
        'players': 'showPlayers',
        'games': 'showGames',
        'eloChart': 'showEloChart',
        'roundRobin': 'showRoundRobin',
        'heatMap': 'showHeatMap',
        'playerScore': 'showPlayerScoreChart'
    },

    showPlayers: function() {
        this.getViewModel().set('activeTab', 0);
    },

    showGames: function() {
        this.getViewModel().set('activeTab', 1);
    },

    showEloChart: function() {
        this.getViewModel().set('activeTab', 2);
    },

    showRoundRobin: function() {
        this.getViewModel().set('activeTab', 3);
    },

    showHeatMap: function() {
        this.getViewModel().set('activeTab', 4);
    },

    showPlayerScoreChart: function() {
        this.getViewModel().set('activeTab', 5);
    },

    onMainContainerInitialize: function(component, eOpts) {
        const view = component,
        VM = this.getViewModel();


        Ext.getStore('PlayerData').load({
            callback: function (records, operation, success) {
                if(success){
                    view.lookup('loading').destroy();
                    let mainPanel;

                    if (Ext.platformTags.desktop){
                        //TODO:  It would be better to use databinding with active tab, but it's not possible to databind activeTab DSGNR-7902
                        mainPanel = Ext.create('Enif.view.MainPanel', {activeItem: VM.get('activeTab')});
                    }else{
                        mainPanel = Ext.create('Enif.view.mobile.MainPanel');
                    }

                    view.add(mainPanel);

                } else {
                    console.error('Error loading the application');
                    Ext.toast('Error loading the application', 55000);
                }
            }
        });
    }

});