import Inquiry from "@/models/Inquiry";
import { connectToDB } from "@/utils/database";
import twilio from 'twilio';

// Initialize Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const POST = async (request) => {
    try {
        const { name, mobile, note, inquiryType, model } = await request.json();

        // Log the incoming data to help with debugging
        console.log('Received data:', { name, mobile, note, inquiryType, model });

        if (!name || !mobile || !inquiryType) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        await connectToDB();
        const newInquiry = new Inquiry({ name, mobile, note, inquiryType, model });
        await newInquiry.save();

        // Send SMS notification
        await client.messages.create({
            body: `New Inquiry from ${name} (Mobile: ${mobile}): ${note || 'No additional notes'}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.NOTIFICATION_PHONE_NUMBER,
        });

        return new Response(JSON.stringify({ id: newInquiry._id }), { status: 201 });
    } catch (error) {
        console.error('Failed to create a new Inquiry:', error);
        return new Response(JSON.stringify({ error: "Failed to create a new Inquiry", details: error.message }), { status: 500 });
    }
};
