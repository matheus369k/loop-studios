import dotenv from 'dotenv'
import { z } from 'zod'
dotenv.config()

export const schemaEnv = z.object({
  NEXT_PUBLIC_GA_ID: z.string(),
})

export const env = schemaEnv.parse(process.env)
