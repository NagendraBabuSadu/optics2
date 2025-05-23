import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import saiOpticsShop from "../../../public/images/saiOpticsShop.png";

export default function ContactUs() {
  return (
    <div id="contact" className="section">
      <Box
        mt={{ xs: "2rem", md: "4rem" }}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        <div>
          <Typography
            variant="h3"
            fontWeight="700"
            m={{ xs: "1.5rem 1rem", sm: "2rem 2rem" }}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
          >
            Contact
          </Typography>
          <Typography
            variant="h4"
            fontSize={{ xs: "1.3rem", sm: "1.6rem", md: "2rem" }}
            m="0rem 1rem"
          >
            Help is just a click away
          </Typography>
          <Typography
            variant="h5"
            fontSize={{ xs: "1.1rem", sm: "1.3rem", md: "1.5rem" }}
            m="1rem 1rem"
          >
            Call me anytime between 9:30am - 10pm
          </Typography>
        </div>

        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on extra-small
              sm: "1fr", // 1 column on small
              md: "1fr", // 1 column on medium
              lg: "repeat(2, 1fr)", // 3 columns on large screens and up
            },
            gap: { xs: 3, sm: 3, lg: 3 },
            width: "100%",
            maxWidth: "1200px",
            px: { xs: 2, sm: 4, lg: 3 },
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: 320, sm: 345 },
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              p: "1rem",
              boxShadow: "0px 0px 6px 2px ",
              transition: "all ease 1s",
              width: "100%", // was: maxWidth

              justifyContent: "center",
            }}
            className="contactCard"
          >
            <CardContent component="a" href="mailto:nagu871reddy@gmail.com">
              <EmailIcon
                sx={{
                  fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                  color: "red",
                }}
              />

              <Typography
                variant="h5"
                sx={{
                  color: "blue",
                  fontSize: { xs: "1rem", md: "1.3rem" },
                }}
              >
                nagu871reddy@gmail.com
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: { xs: 320, sm: 345 },
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              p: "1rem",
              boxShadow: "0px 0px 6px 2px ",
              transition: "all ease 1s",
              width: "100%", // was: maxWidth

              justifyContent: "center",
            }}
            className="contactCard"
          >
            <CardContent component="a" href="tel:+918919776375">
              <CallIcon
                sx={{
                  fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                  color: "red",
                }}
              />

              <Typography
                variant="h4"
                sx={{
                  color: "blue",
                  fontSize: { xs: "1rem", md: "1.3rem" },
                }}
              >
                +91 89197 76375
              </Typography>
            </CardContent>
          </Card>
         
        </Box>

        <Box
          mt={6}
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={{ xs: 2, sm: 4 }}
        >
          <Typography
            variant="h3"
            fontWeight="700"
            mb={{ xs: 3, sm: 4 }}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            textAlign="center"
          >
            You can Find Us Here
          </Typography>

          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            gap={{ xs: 3, md: 4 }}
            width="100%"
            maxWidth="1000px"
            justifyContent="center"
          >
            <Box flex="1" display="flex" justifyContent="center" width="100%">
              <a href={saiOpticsShop.src} target="_blank">
                <Image
                  src={saiOpticsShop}
                  alt="Sai Optics Shop"
                  style={{
                    borderRadius: "12px",
                    width: "100%",
                    maxWidth: "450px",
                    height: "auto",
                  }}
                />
              </a>
            </Box>

            <Box flex="1" width="100%">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1025.6499724336775!2d78.39702362848918!3d17.492701798958972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915956afc809%3A0x28c92f547ec4119b!2sSai%20Optical%20Express!5e1!3m2!1sen!2sin!4v1747973945974!5m2!1sen!2sin"
                style={{
                  border: 0,
                  borderRadius: "12px",
                  width: "100%",
                  height: "300px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
        
      </Box>
    </div>
  );
}
