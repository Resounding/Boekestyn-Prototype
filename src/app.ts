import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router:Router;

    configureRouter(config:RouterConfiguration, router:Router) {
        config.title = 'Langendoen Mechanical Job Management Application';
        config.map([
            {route: ['', 'calculator'], name: 'calculator', moduleId: 'views/calculator', nav: true, title: 'Order Calculator'},
            {route: ['table'], name: 'table', moduleId: 'views/table', nav: true, title: 'Order Calculator'},
            {route: ['table-base'], name: 'table-base', moduleId: 'views/table-base', nav: true, title: 'Order Calculator'},
            {route: ['table-2'], name: 'table-2', moduleId: 'views/table-2', nav: true, title: 'Order Calculator'}
        ]);

        this.router = router;
    }
}