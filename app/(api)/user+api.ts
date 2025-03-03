require('dotenv').config();

const { neon } = require('@neondatabase/serverless');

// const requestHandler = async (req, res) => {
//   const result = await sql`SELECT version()`;
//   const { version } = result[0];
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(version);
// };

// http.createServer(requestHandler).listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });

export async function POST(request: Request) {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: 'Missing Required Field' },
        { status: 400 },
      );
    }

    const response = await sql`
                INSERT INTO users(
                    name,
                    email,
                    clerk_id
                )
                VALUES (
                    ${name},
                    ${email},
                    ${clerkId}
                )
            `;

    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error) {
    console.log(error, 'errr==>');
  }
}
