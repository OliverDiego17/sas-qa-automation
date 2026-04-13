import sql from "mssql";

export async function getDbConnection() {
  return await sql.connect({
    user: "sasdbuser",
    password: "TrustNo1",
    server: "10.8.1.2",
    port: 1533,
    database: "Clearing",
    options: { encrypt: false, trustServerCertificate: true },
  });
}

// Optional: export sql types (Int, VarChar, etc.)
export { sql };
