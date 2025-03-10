import { db } from "@/lib/db";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { username, password } = body;

    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: "Credenciales incorrectas" }), { status: 401 });
    }

    return new Response(JSON.stringify({ message: "Login exitoso" }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Error en el servidor" }), { status: 500 });
  }
};

  