import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import "dotenv/config"
import * as readline from "node:readline/promises"

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const messages = []

async function main() {
  console.log("🤖 AI Chatbot siap digunakan! Ketik pesan Anda...\n")

  while (true) {
    const userInput = await terminal.question("Anda: ")

    if (userInput.toLowerCase() === "exit" || userInput.toLowerCase() === "quit") {
      console.log("Terima kasih telah menggunakan chatbot!")
      break
    }

    messages.push({ role: "user", content: userInput })

    try {
      const result = streamText({
        model: openai("gpt-4o"),
        messages,
        system: "Anda adalah asisten AI yang membantu dan ramah. Jawab dalam bahasa Indonesia.",
      })

      let fullResponse = ""
      process.stdout.write("\nAsisten: ")

      for await (const delta of result.textStream) {
        fullResponse += delta
        process.stdout.write(delta)
      }

      process.stdout.write("\n\n")
      messages.push({ role: "assistant", content: fullResponse })
    } catch (error) {
      console.error("Error:", error.message)
      console.log("Pastikan API key OpenAI sudah dikonfigurasi dengan benar.\n")
    }
  }

  terminal.close()
}

main().catch(console.error)
