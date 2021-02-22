import * as alt from 'alt-client';

let views = {};

alt.on('view:useMethod', function (id, method) {
    if (method == 'on') return console.log('This method isn\'t supported by this event.');
    const args = Array.prototype.slice.call(arguments, 2);
    views[id].view[method](...args);
});

alt.on('view:accessProperties', function (id, actionType, properties, value) {
    if (actionType == true) { //modify value
        views[id].view[properties] = value;
    } else {
        alt.emit('value', views[id].view[properties]);
    }
});

alt.on('view:load', (id, callbackName) => {
    let view = new alt.WebView(`http://resource/client/views/${id}/index.html`);
    
    view.on('loaded', () => {
        views[id] = {view, id};
        if (callbackName) alt.emit(callbackName);
    });
    
});

alt.on('view:on', (id, eventName, callbackName) => {
    views[id].view.on(eventName, function () {
        alt.emit(callbackName, id, ...arguments);
    });
});