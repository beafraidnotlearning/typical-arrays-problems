exports.min = function min(array) {
    if (typeof array != "undefined") {
        if (array.length != 0) {
            return array.reduce(function (pv, cv) {
                return cv < pv ? cv : pv;
            });
        } else {
            return 0;
        }
    } else {
        return 0;
    }
};

exports.max = function max(array) {};

exports.avg = function avg(array) {};
