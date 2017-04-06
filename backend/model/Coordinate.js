"use strict";

import * as Sequelize from "sequelize";

export default function (sequelize, dataTypes) {
    var coordinate;
    coordinate = sequelize.define("Coordinate", {
        lat: {
            type: dataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true,              
            }
        },
        lon: {
            type: dataTypes.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        x1: {
            type: dataTypes.DOUBLE,
            allowNull: true
        },
        x2: {
            type: dataTypes.DOUBLE,
            allowNull: true
        }
    }, {
        instanceMethods: {},
        classMethods: {},
        hooks: {}
    });
    return coordinate;
};