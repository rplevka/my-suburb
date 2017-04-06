import Sequelize from "sequelize";
import path from "path";
import fs from "fs";

class Database {

    sequelize;
    models;
    ignoredFiles = [
    ];
    
    constructor(config) {
        this.models = {};
        let that = this;

        this.sequelize = new Sequelize("mysql://" + config.user + ":" + config.password + "@" + config.host + "/" + config.database, {
            define: {
                underscored: true,
                freezeTableName: true
            },
            logging: console.log
        });

        /** Find all models within folder, instantianize and will run needed methods */
        fs.readdirSync(path.join(__dirname, '..', 'model'))
            .filter(function (file) {
                return (file.indexOf(".") !== 0) && that.ignoredFiles.indexOf(file) === -1;
            })
            .forEach(function (file) {
                var model = that.sequelize.import(path.join(__dirname, '..', 'model', file));
                that.models[model.name] = model;
            });

        /** Initialize assotiations */
        Object.keys(that.models).forEach(function(modelName) {
            if ("associate" in that.models[modelName]) {
                that.models[modelName].associate(that.models);
            }
        });
    }

    /**
     * Wrapper function around sequelize.sync method, which pushes actual state to the storage, therefore
     * keeps db schema up-to-date
     * @param cb
     */
    sync(cb) {
        console.log('Db sync');
        this.sequelize.sync().then(cb);
    }

    /**
     * Conventional getter for specific models
     * @param modelName
     * @returns {any|boolean}
     */
    getModel(modelName) {
        return this.models[modelName] || false;
    }
}

export default Database;