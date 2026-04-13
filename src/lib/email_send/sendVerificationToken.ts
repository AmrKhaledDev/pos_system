import nodemailer from "nodemailer";
// ======================================
export const sendVerificationToken = async (
  email: string,
  verificationToken: string,
): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },
    });
    const link = `${process.env.DOMAIN}/verify/${verificationToken}`;
    await transporter.sendMail({
      from: '"POS System" <pos_system@gmail.com>',
      to: email,
      subject: "تأكيد البريد الإلكتروني",
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2>مرحبًا 👋</h2>
      <p>شكرًا لتسجيلك في <strong>POS System</strong>.</p>
      <p>اضغط على الزر التالي لتأكيد بريدك الإلكتروني:</p>
      <a 
        href="${link}"
        style="
          display: inline-block;
          margin-top: 15px;
          padding: 12px 24px;
          background: #2563eb;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
        "
      >
        تأكيد البريد الإلكتروني
      </a>
      <p style="margin-top: 20px;">
        إذا لم تقم بإنشاء هذا الحساب، يمكنك تجاهل هذه الرسالة.
      </p>
    </div>
  `,
    });
    return { success: true, message: "تم ارسال رمز التحقق للبريد الخاص بك" };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "يتعذر ارسال رمز التحقق للبريد الخاص بك",
    };
  }
};
