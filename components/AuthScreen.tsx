import React, { useState } from "react";

interface AuthScreenProps {
  onLogin: (user: any) => void;
}

const API_URL = "http://localhost:4000/api";

export function AuthScreen({ onLogin }: AuthScreenProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = `${API_URL}/${mode === "login" ? "login" : "register"}`;
      const body =
        mode === "login"
          ? { email, password }
          : { name, email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro inesperado");
        setLoading(false);
        return;
      }

      // Token recebido do backend
      onLogin(data.user);
   
} catch (err) {
      setError("Não foi possível conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>{mode === "login" ? "Entrar" : "Criar Conta"}</h2>

        {mode === "register" && (
          <>
            <label style={styles.label}>Seu nome</label>
            <input
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </>
        )}

        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label style={styles.label}>Senha</label>
        <input
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={styles.error}>{error}</p>}

        <button style={styles.button} disabled={loading}>
          {loading ? "Carregando..." : mode === "login" ? "Entrar" : "Cadastrar"}
        </button>

    <p
      style={styles.toggle}
      onClick={() => setMode(mode === "login" ? "register" : "login")}
    >
      {mode === "login"
        ? "Não tem conta? Criar conta"
        : "Já tem conta? Entrar"}
    </p>
      </form>
    </div>
  );
}

// Estilos simples inline
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f2f2f2",
  },

  form: {
    padding: 24,
    borderRadius: 12,
    background: "#fff",
    width: 320,
    boxShadow: "0 0 12px rgba(0,0,0,0.1)",
  },

  label: {
    fontSize: 14,
    marginTop: 12,
  },

  input: {
    width: "100%",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #ccc",
    marginTop: 4,
  },

  button: {
    width: "100%",
    marginTop: 20,
    padding: 10,
    background: "#4a4aff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
  },

  toggle: {
    marginTop: 16,
    textAlign: "center",
    color: "#444",
    cursor: "pointer",
    textDecoration: "underline",
  },

  error: {
    marginTop: 8,
    color: "red",
    fontSize: 14,
  },
};
