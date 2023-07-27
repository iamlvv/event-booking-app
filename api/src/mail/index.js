const nodemailer = require('nodemailer')

module.exports.sendVerificationCode = async (booking,event) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'netpower.booking@gmail.com',
      pass: process.env.GMAIL_PASSWORD
    }
  })
  
  await transporter.sendMail({
    from: 'netpower.booking@gmail.com',
    to: booking.email,
    subject: "Netpower Booking Verification", 
    text: "Hello world?",
    html: `<h2>Greetings from Netpower!</h2>
    <p>This is the confirmation email for your booking from Netpower Event Booking Page. Detailed information can be found below: </p>
    <ul>
    <li><b>Event Name: </b>${event.name}</li>
    <li><b>Location: </b>${event.location}</li>
    <li><b>Your Name: </b>${booking.bookerName}</li>
    <li><b>Email: </b>${booking.email}</li>
    <li><b>Phone Number: </b>${booking.phoneNumber}</li>
    <li><b>Seats: </b>${booking.seatName}</li>
    <li><b>Total Price: </b>${booking.bookingPrice}</li>
    <li><b>Verification Code: </b>${booking.verificationCode}</li>
    </ul>
    <p>Please use this verification code to check your booking from our website: http://localhost:3000/allbookings</p>
    <p>Thank you and have a good day!</p>
    <p>Netpower Team</p>`,
  })
}