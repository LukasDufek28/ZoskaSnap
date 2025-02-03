// src/app/gdpr/page.tsx

import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from 'next/link';

export const metadata = { title: "GDPR | ZoškaSnap" };

export default function GDPR() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",  // Make the container take up full viewport height
        paddingBottom: "80px", // Add padding to the bottom to avoid overlap with the nav bar
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Privacy Policy (GDPR Compliance)
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        1. Introduction
      </Typography>
      <Typography paragraph>
        At Zoska Snap, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the General Data Protection Regulation (GDPR).
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        2. Information We Collect
      </Typography>
      <Typography paragraph>
        We collect the following types of personal data:
      </Typography>
      <Typography paragraph>
        - Personal Identification Information: name, email address, phone number.
      </Typography>
      <Typography paragraph>
        - Technical Data: IP address, browser type, browser version, and operating system.
      </Typography>
      <Typography paragraph>
        - Usage Data: pages visited, time spent on pages, and other usage statistics.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        3. How We Use Your Information
      </Typography>
      <Typography paragraph>
        We use the collected information to:
      </Typography>
      <Typography paragraph>
        - Provide and improve our services and website.
      </Typography>
      <Typography paragraph>
        - Respond to your inquiries and provide customer support.
      </Typography>
      <Typography paragraph>
        - Analyze website usage to enhance user experience.
      </Typography>
      <Typography paragraph>
        - Comply with legal obligations.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        4. Legal Basis for Processing Your Data
      </Typography>
      <Typography paragraph>
        Under the GDPR, we process your data based on the following legal grounds:
      </Typography>
      <Typography paragraph>
        - Consent: When you provide consent for specific purposes (e.g., subscribing to a newsletter).
      </Typography>
      <Typography paragraph>
        - Contractual Necessity: When processing is required to fulfill a contract with you (e.g., providing services).
      </Typography>
      <Typography paragraph>
        - Legitimate Interests: When processing is in our legitimate interests, provided that it does not override your rights and freedoms.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        5. Data Sharing and Transfers
      </Typography>
      <Typography paragraph>
        We do not share your personal data with third parties unless required by law or with trusted service providers that assist us in operating our website or conducting business (e.g., email services, analytics tools). We will ensure that any third parties are GDPR-compliant.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        6. Data Retention
      </Typography>
      <Typography paragraph>
        We will retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        7. Your Rights Under the GDPR
      </Typography>
      <Typography paragraph>
        As a user, you have the following rights:
      </Typography>
      <Typography paragraph>
        - Right to Access: You can request a copy of the personal data we hold about you.
      </Typography>
      <Typography paragraph>
        - Right to Rectification: You can request corrections to any inaccurate data.
      </Typography>
      <Typography paragraph>
        - Right to Erasure: You can request that we delete your personal data.
      </Typography>
      <Typography paragraph>
        - Right to Restriction: You can request that we limit the processing of your data.
      </Typography>
      <Typography paragraph>
        - Right to Object: You can object to certain types of data processing.
      </Typography>
      <Typography paragraph>
        - Right to Data Portability: You can request that we transfer your data to another organization.
      </Typography>
      <Typography paragraph>
        To exercise these rights, please contact us at [your contact email].
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        8. Security
      </Typography>
      <Typography paragraph>
        We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        9. Cookies
      </Typography>
      <Typography paragraph>
        Our website uses cookies to improve your experience. You can manage your cookie preferences through your browser settings. For more information, please refer to our Cookie Policy.
      </Typography>
      <Link href="/auth/registracia" passHref>
      <Button
      variant="outlined"
      fullWidth
      sx={{
      mb: 2,
      bgcolor: "#d32f2f",
      color: "white",
      "&:hover": {
        bgcolor: "#c2185b",  // Hover effect for Google button
      },
      }}
  >
    Back to registration
  </Button>
</Link>
    </Container>
  );
}