import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai("gpt-4-turbo"),
    system: `You are a helpful course advisor assistant for UC Davis. You help students with course selection, 
    degree requirements, and academic planning. Be concise and friendly in your responses. 
    When recommending courses, consider prerequisites and graduation requirements.
    
    Current academic context:
    - Computer Science major
    - 133.5 units completed out of 180 required
    - Overall GPA: 3.588
    - Need to complete: ECS 154A, ECS 171, ECS 188
    - Need 2 Arts & Humanities and 1 Social Science GE courses
    - Technical electives needed: 3 upper division ECS courses
    
    Course information:
    - ECS 154A (Computer Architecture): Required for major, offered Spring 2025
    - ECS 171 (Machine Learning): Currently waitlisted (#2 on waitlist)
    - ECS 188 (Ethics): Required for graduation, not yet registered
    - ECS 175 (Computer Graphics): Available technical elective
    - AHI 001A (Art History): Fulfills Arts & Humanities GE
    - SOC 001 (Intro to Sociology): Fulfills Social Science GE
    `,
    messages,
  })

  return result.toDataStreamResponse()
}

