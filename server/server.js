import express from 'express'
import axios from 'axios';
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv' 
import nodemailer from 'nodemailer';
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'

dotenv.config()
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;


const baseURL = process.env.GHOST_ACCOUNT_URL_PROD;
const key = process.env.GHOST_ADMIN_API_KEY_PROD;


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};



app.use(cors(corsOptions));
const [id, secret] = key.split(':');



app.post('/subscribe', (req,res)=>{
  
  // Create the token (including decoding secret)
const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
  keyid: id,
  algorithm: 'HS256',
  expiresIn: '5m',
  audience: `/admin/`
});


    const url = baseURL;
    const headers = { Authorization: `Ghost ${token}` };
    const payload = { members: [{ email: req.body.userEmail }] };
    axios.post(url, payload, { headers })
    .then(response => {
        if(response.status === 201){
            res.status(200).send("Successfully Subscribed !");
        } else{
            res.status(404).send("Some Error Occured !");
        }
    })
    .catch(error => {
      if(error.response.status === 422){
        res.status(201).send("User Already Exists");
      } else {
        res.status(404).send("Some Error Occured !");
      }
     
    });

   
})


// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_ACCOUNT_EMAIL,
      pass: process.env.GOOGLE_ACCOUNT_PASSWORD
    }
  });


const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 15 minutes
  limit: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Use an external store for consistency across multiple server instances.
  })

app.post('/institutional-form', limiter, (req,res)=>{    

    const mailOptions = {
        from: 'no-reply@pantherprotocol.io',
        to: 'institutions@pantherprotocol.io',
        subject: `Institutions Mail : ${req.body.business_name}`,
        html: `
        <body style="margin: 0; padding: 0; font-family: Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 40px auto; padding: 30px; background-color: #030619; color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <h1 style="text-align: center; font-size: 24px; font-weight: 700; margin-bottom: 30px;">Contact Us Form - New Request</h1>
        
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 5px; font-size: 18px; font-weight: 600;">User Name:</h3>
            <p style="margin: 0; font-size: 16px; font-weight: 500;"><strong>${req.body.user_name}</strong></p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 5px; font-size: 18px; font-weight: 500;">User Email:</h3>
            <p style="margin: 0; font-size: 16px; font-weight: 400;"><strong>${req.body.user_email}</strong></p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 5px; font-size: 18px; font-weight: 500;">Business Name:</h3>
            <p style="margin: 0; font-size: 16px; font-weight: 400;"><strong>${req.body.business_name}</strong></p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 5px; font-size: 18px; font-weight: 500;">User Message:</h3>
            <p style="margin: 0; font-size: 16px; font-weight: 400;"><strong>${req.body.user_message}</strong></p>
        </div>
    </div>
</body>
      `
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("error", error.message)
          res.status(404).send("Some Error Occured, Please try Again!")
        } else {
          res.status(200).send("Your request has been submitted !")
        }
      });

   
}) 

app.listen( port ,()=>{
    console.log('server is running at port number 5000');
});