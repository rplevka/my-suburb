"use strict";
import App, {instance} from './app';

var app = new App();
instance.setApp(app);
app.startServer();

console.log(instance)

//create user ...
/*
setTimeout(function() {
    app.db.getModel('User').create({
        username : 'admin',
        group_id : 1,
        email : 'admin@admin.com',
        password: 'admin',
        password_confirmation:'admin'
    })
},2000);*/
