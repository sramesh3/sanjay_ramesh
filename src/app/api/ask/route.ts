import fs   from "fs";
import path from "path";
import { NextResponse } from "next/server";
// Pull in the v1beta2 clients
import { v1beta2 } from "@google-ai/generativelanguage";

// 1) Validate your API key
const apiKey = process.env.GENAI_API_KEY;
if (!apiKey) {
  throw new Error("Missing GENAI_API_KEY in .env.local");
}

// 2) Instantiate the **Text** (for completions) or **Discuss** (for chat) client.
//    You can pass `{ apiKey }` in the client constructor to use an API key.
const discussClient = new v1beta2.DiscussServiceClient({ apiKey });
const model         = "models/text-bison-001";  // or your Gemini model name

// 3) Prime with your bio once
const bioPath = path.join(process.cwd(), "personal_bio.txt");
const bio     = fs.readFileSync(bioPath, "utf-8");

let primed = false;
async function prime() {
  if (primed) return;
  await discussClient.generateMessage({
    model,
    prompt: {
      // system messages go here
      messages: [
        { author: "system", content: "You are Sanjay Ramesh. Answer as if you’re him." },
        { author: "system", content: bio },
      ],
    },
  });
  primed = true;
}

export async function POST(request: Request) {
  const { question } = await request.json();
  await prime();

  const [response] = await discussClient.generateMessage({
    model,
    prompt: {
      messages: [
        // only send the user’s question now
        { author: "user", content: question },
      ],
    },
  });

  const answer = response.candidates?.[0]?.content ?? "";
  return NextResponse.json({ answer });
}
