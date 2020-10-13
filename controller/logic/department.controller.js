/** Dto */
const departmentDto = require("../../model/dto/department.dto");
const config = require("config");

/** Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createdepartment = (req, res, next) => {
    let std = {
        code: req.body.code,
        name: req.body.name,
        chair_name: req.body.chair_name,
        faculty_id: req.body.faculty_id
    };
    departmentDto.create(std, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
    });
};


exports.updatedepartment = (req, res, next) => {
    let std = {
        code: req.body.code,
        name: req.body.name,
        chair_name: req.body.chair_name,
        faculty_id: req.body.faculty_id
    };
    departmentDto.update({ _id: req.body.id }, std, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.getAll = (req, res, next) => {

    departmentDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};


exports.getByCode = (req, res, next) => {

    departmentDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deletedepartment = () => {
    departmentDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}