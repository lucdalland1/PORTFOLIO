"use server"

import nodemailer from 'nodemailer';

// Configuration du transporteur d'emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Vérification des variables d'environnement
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('Variables d\'environnement manquantes:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'défini' : 'non défini',
      EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? 'défini' : 'non défini'
    });
    return {
      message: "Configuration email manquante. Veuillez contacter l'administrateur.",
    }
  }

  try {
    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'lucdalland@gmail.com',
      subject: `Nouveau message de contact de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    console.log('Tentative d\'envoi d\'email avec les options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    // Envoi de l'email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès:', info);

    return {
      message: "Merci pour votre message ! Je vous répondrai bientôt.",
    }
  } catch (error: Error | unknown) {
    console.error('Erreur détaillée lors de l\'envoi de l\'email:', {
      message: error instanceof Error ? error.message : 'Erreur inconnue',
      stack: error instanceof Error ? error.stack : undefined,
      code: error instanceof Error ? (error as { code?: string }).code : undefined
    });
    return {
      message: "Désolé, une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.",
    }
  }
}
