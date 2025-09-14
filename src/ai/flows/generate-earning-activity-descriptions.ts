'use server';

/**
 * @fileOverview A flow for generating engaging descriptions for new earning activities using GenAI.
 *
 * - generateEarningActivityDescription - A function that generates an engaging description for an earning activity.
 * - GenerateEarningActivityDescriptionInput - The input type for the generateEarningActivityDescription function.
 * - GenerateEarningActivityDescriptionOutput - The return type for the generateEarningActivityDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEarningActivityDescriptionInputSchema = z.object({
  activityName: z.string().describe('The name of the earning activity.'),
  exampleReward: z.string().describe('An example of reward earned from this activity'),
});
export type GenerateEarningActivityDescriptionInput = z.infer<
  typeof GenerateEarningActivityDescriptionInputSchema
>;

const GenerateEarningActivityDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe('An engaging description of the earning activity.'),
});
export type GenerateEarningActivityDescriptionOutput = z.infer<
  typeof GenerateEarningActivityDescriptionOutputSchema
>;

export async function generateEarningActivityDescription(
  input: GenerateEarningActivityDescriptionInput
): Promise<GenerateEarningActivityDescriptionOutput> {
  return generateEarningActivityDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEarningActivityDescriptionPrompt',
  input: {schema: GenerateEarningActivityDescriptionInputSchema},
  output: {schema: GenerateEarningActivityDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter. Your task is to create an engaging and enticing description for a new earning activity on the Helalink platform.

Activity Name: {{{activityName}}}
Example Reward: {{{exampleReward}}}

Write a short description to encourage users to participate in this activity. Focus on the benefits and potential earnings. Make it sound exciting and easy to do.
`,
});

const generateEarningActivityDescriptionFlow = ai.defineFlow(
  {
    name: 'generateEarningActivityDescriptionFlow',
    inputSchema: GenerateEarningActivityDescriptionInputSchema,
    outputSchema: GenerateEarningActivityDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
