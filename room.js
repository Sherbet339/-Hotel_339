var fs = require('fs');
var rooms = new Map();


    fs.readFile('room.txt', function (err, filedata) {
        if(err) throw err;

        let room_data = filedata.toString();
        let room_lines = room_data.split('/n');

        room_lines.forEach((line) => {
            let dat = line.split(' ');
            rooms.set(dat[0], dat[1], dat[2])
            console.log('show dat: ' + dat[0], dat[1], dat[2])
        })

        rooms.forEach((value, key) => {
            console.log('Room ' + key + ' have ' + value)
        })
    });