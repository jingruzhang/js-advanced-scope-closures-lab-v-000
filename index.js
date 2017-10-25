function produceDrivingRange(range) {
    return function(start, end) {
        const distance = Math.abs(parseInt(end) - parseInt(start));
        if (distance > range) {
            return `${distance - range} blocks out of range`;
        } else {
            return `within range by ${range - distance}`;
        }
    }
}

function produceTipCalculator(percent) {
    return function(total) {
        return total * percent;
    }
}

function createDriver() {
    let driverId = 0;

    return class Driver {
        constructor(name) {
            this.id = ++ driverId;
            this.name = name;
        }
    }
}
