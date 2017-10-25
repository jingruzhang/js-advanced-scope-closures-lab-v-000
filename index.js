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
