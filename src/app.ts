import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router:Router;

    configureRouter(config:RouterConfiguration, router:Router) {
        config.title = 'Langendoen Mechanical Job Management Application';
        config.map([
            {route: ['', 'calculator'], name: 'calculator', moduleId: 'views/calculator', nav: true, title: 'Order Calculator'}
        ]);

        this.router = router;
    }
}