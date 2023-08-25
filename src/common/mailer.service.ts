import { createTransport } from 'nodemailer'
import SMPTTransport from 'nodemailer/lib/smtp-transport'

<<<<<<< HEAD
const transport = createTransport(
  new SMPTTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
)

export const sendMail = (email: string, code: string | number) => {
  transport.sendMail(
    {
      from: process.env.EMAIL,
      to: email,
      text: `${code}`,
    },
    (err, info) => {
      if (err) {
        console.log('Error ', err.message)
      } else {
        console.log(info.response)
      }
    }
  )
}
=======
const transport = createTransport(new SMPTTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
}))

export const sendMail = (email: string, code: string | number) => {
    transport.sendMail({
        from: process.env.EMAIL,
        to: email,
        text: `${code}`
    }, (err, info) => {
        if (err) {
            console.log('Error ', err.message);
        } else {
            console.log(info.response);
        }
    })
}
>>>>>>> b8cf0d176ec22c7ba4185b2bb7e1dfa2c6ea1793
