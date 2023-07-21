function getNextChar(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}

function insertSeats(seatNum, seatType, seatChar) {
  let seats = []
  for (let i = 0; i < seatNum; i++) {
    if (i % 10 === 0 && i !== 0)
      seatChar.char = getNextChar(seatChar.char)
    seats.push({
      seatName: seatChar.char + i % 10,
      isReserved: false,
      seatType: seatType
    })
  }
  seatChar.char = getNextChar(seatChar.char)

  return seats
}

module.exports = insertSeats