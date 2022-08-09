import React, { useState } from "react";
import { FormControl, Input, Box, TextField, Button } from '@mui/material';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b9ba7410-176a-11ed-98e8-53e0970ab51c"; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <Box style={{ display: "flex", justifyContent: 'center', alignItems: 'center', mx: 'auto'}}>
            <form 
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div style={{ mx: "auto", marginTop: `10px`, }}>
                    <TextField fullWidth className="m-2 p-2" type="text" placeholder="Your name" name="name" variant="standard" required />
                </div>
                <div style={{ mx: "auto", marginTop: `10px` }}>
                    <TextField fullWidth className="m-2 p-2" type="email" placeholder="Email" name="email" variant="standard" required />
                </div>
                <div style={{ mx: "auto", marginTop: `10px` }}>
                    <TextField fullWidth className="m-2 p-2" multiline rows={4} placeholder="Your message" name="message" variant="standard" required />
                </div>
                <div style={{ mx: "auto", marginTop: `20px`, paddingBottom: `50px` }}>
                    <Button fullWidth className="m-2 p-2" variant="contained" type="submit"> Send a message </Button>
                </div>
            </form>
        </Box>
    );
};

export default ContactForm;