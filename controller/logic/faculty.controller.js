/** Dto */
const facultyDto = require("../../model/dto/faculty.dto");
const config = require("config");

/** Helper */
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createfaculty = (req, res, next) => {
    let std = {
        code: req.body.code,
        name: req.body.name,
        dean_name: req.body.dean_name
    };
    facultyDto.create(std, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
    });
};


exports.updatefaculty = (req, res, next) => {
    let std = {
        code: req.body.code,
        name: req.body.name,
        dean_name: req.body.dean_name
    };
    facultyDto.update({ _id: req.body.id }, std, (err, data) => {
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

    facultyDto.getAll({}, (err, data) => {
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

    facultyDto.getByCode({ code: req.params.code }, (err, data) => {
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

exports.deletefaculty = () => {
    facultyDto.delete({ _id: req.body.id }, (err, data) => {
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