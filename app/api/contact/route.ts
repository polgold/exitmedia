import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL || "hola@exitmedia.com.ar";
const FROM = process.env.CONTACT_FROM_EMAIL || "ExitMedia <hola@exitmedia.com.ar>";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  locale?: string;
};

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

export async function POST(req: NextRequest) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const { name, email, phone, projectType, budget, message, locale } = data;

  if (!name || !email || !projectType || !message) {
    return NextResponse.json(
      { error: "Faltan campos requeridos" },
      { status: 400 },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;

  const html = `
    <div style="font-family:-apple-system,system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111">
      <h2 style="margin:0 0 8px;font-size:20px">Nuevo contacto — ExitMedia</h2>
      <p style="margin:0 0 16px;color:#666;font-size:14px">Enviado desde el formulario del sitio</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:6px 0;color:#666;width:140px">Nombre</td><td>${escape(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#666">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:6px 0;color:#666">Teléfono</td><td>${escape(phone)}</td></tr>` : ""}
        <tr><td style="padding:6px 0;color:#666">Tipo</td><td>${escape(projectType)}</td></tr>
        ${budget ? `<tr><td style="padding:6px 0;color:#666">Presupuesto</td><td>${escape(budget)}</td></tr>` : ""}
      </table>
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0" />
      <div style="white-space:pre-wrap;line-height:1.55;font-size:14px">${escape(message)}</div>
    </div>
  `;

  if (!key) {
    console.log("[contact] (no RESEND_API_KEY, logging instead)", data);
    return NextResponse.json({ ok: true, mocked: true });
  }

  try {
    const resend = new Resend(key);
    const result = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `Nuevo contacto${locale ? ` [${locale}]` : ""} — ${projectType} — ${name}`,
      html,
    });
    if (result.error) {
      console.error("[contact] resend error", result.error);
      return NextResponse.json({ error: "No pudimos enviar el mail" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected", err);
    return NextResponse.json({ error: "Error inesperado" }, { status: 500 });
  }
}
