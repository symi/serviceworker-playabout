window.addEventListener('message', function() {
    console.log('message', arguments);
});

var swRegistration = null;

if (!navigator.serviceWorker) {
    console.log('noooooo, service workers already gone on holiday');
} else {
    console.log('current?', navigator.serviceWorker.current);
}

document
    .getElementById('install')
    .addEventListener('click', function() {
        navigator.serviceWorker
            .register('./worker.js')
            .then(function(serviceWorker) {
                swRegistration = serviceWorker;

                console.log('installed worker');

                serviceWorker.addEventListener('statechange', function(event) {
                    console.log('Worker state updated', event.target.state);
                });
            }, function(error) {
                console.log('error installing worker', error);
            });
    });

document
    .getElementById('uninstall')
    .addEventListener('click', function() {
        swRegistration.unregister()
            .then(function() {
                console.log('uninstalled worker');
            }, function(error) {
                console.log('error uninstalling worker', error);
            });
    });