// MapGroupMenuItem.js
var React = require('react');
var ViewActions = require("../actions/ViewActions");

var MapLayerMenuItem = require('../components/MapLayerMenuItem');

var MapGroupMenuItem = React.createClass({

  onGroupClick: function (e) {
      // do nothing if this is the current group
      e.preventDefault();
      e.stopPropagation();
      if( this.props.group.is_active ) {
          return;
      } else {
        this.props.navigate(null, this.props.group.tag.text);
      }
  },


  render: function() {
    var group = this.props.group;
    var navigate = this.props.navigate;
    var groupName = group.text;
    var className = "group-menu-item" + group.is_active ? " active" : "";

    var layerItems = group.layers.map(function(layer, index){
      return(
        <MapLayerMenuItem key={index} layer={ layer } navigate={navigate}></MapLayerMenuItem>
        )
    });

    return (
      <li className={ className } >
        <h3 className="group-menu-item-header" onClick={ this.onGroupClick }>
        { groupName }
        </h3>
        <ul className="map-layer-menu">
            { layerItems }
        </ul>
      </li>
    )
  }

});

module.exports = MapGroupMenuItem;
