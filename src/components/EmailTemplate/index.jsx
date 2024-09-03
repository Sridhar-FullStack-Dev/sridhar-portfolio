export default function EmailTemplate({
  firstName,
  secondName,
  email,
  description,
}) {
  return `
      <div style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; padding: 20px; max-width: 600px; margin: 0 auto;">
        <ul style="list-style-type: none; padding: 0;">
          <li style="margin-bottom: 10px; font-size: 16px; color: #555;">Name: ${firstName} ${secondName}</li>
          <li style="margin-bottom: 10px; font-size: 16px; color: #555;">Email: ${email}</li>
          <h2 style="color: #333;">Project Details: </h2>
          <li style="margin-bottom: 10px; font-size: 16px; color: #555;">${description}</li>
        </ul>
      </div>
    `;
}
