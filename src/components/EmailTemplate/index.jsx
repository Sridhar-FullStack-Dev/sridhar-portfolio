export default function EmailTemplate({
  firstName,
  secondName,
  email,
  description,
}) {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'CustomFont', Arial, sans-serif; background-color: #ffffff; max-width: 600px; margin: 0 auto; border-collapse: collapse;">
      <tr>
        <td style="padding: 20px; background-color: #000000;">
          <h1 style="color: #ffffff; margin: 0;">Portfolio Message</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #cccccc;">
                <strong style="color: #000000;">Name:</strong> ${firstName} ${secondName}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #cccccc;">
                <strong style="color: #000000;">Email:</strong> ${email}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <strong style="color: #000000;">Project Details:</strong>
                <p style="margin: 10px 0 0; color: #333333;">${description}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px; background-color: #000000; color: #ffffff; text-align: center;">
          &copy; 2024 Sridhar Fullstack Dev. All rights reserved.
        </td>
      </tr>
    </table>
  `;
}
