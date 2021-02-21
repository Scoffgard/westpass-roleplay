import * as alt from 'alt-client';

let views = {};

alt.on('view:useMethod', function (id, method) {
    if (method == 'on') return console.log('This method isn\'t supported by this event.');
    views[id].view[method](...Array.prototype.slice.call(arguments, 2));
});

alt.on('view:load', (id) => {
    let view = new alt.WebView(`http://resource/client/views/${id}/index.html`);
    
    view.on('loaded', () => {
        views[id] = {view, id};
    });
    
});

alt.on('view:on', (id, eventName, callbackName) => {
    views[id].view.on(eventName, data => {
        alt.emit(callbackName, data);
    });
});