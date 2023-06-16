import scheme from '../../database/scheme.js'
import {DataTypes} from "sequelize";

export const DogsModel = scheme.define('dogs', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    color: {type: DataTypes.STRING, allowNull: false},
    tail_length: {type: DataTypes.INTEGER, allowNull: false},
    weight: {type: DataTypes.INTEGER, allowNull: false},
})