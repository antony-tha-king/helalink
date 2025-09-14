'use server';

/**
 * @fileOverview A testimonials summarization AI agent.
 *
 * - summarizeTestimonials - A function that handles the testimonials summarization process.
 * - SummarizeTestimonialsInput - The input type for the summarizeTestimonials function.
 * - SummarizeTestimonialsOutput - The return type for the summarizeTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTestimonialsInputSchema = z.object({
  testimonial: z
    .string()
    .describe("The full text of the user testimonial to summarize."),
});
export type SummarizeTestimonialsInput = z.infer<typeof SummarizeTestimonialsInputSchema>;

const SummarizeTestimonialsOutputSchema = z.object({
  summary: z
    .string()
    .describe("A concise, impactful quote summarizing the user testimonial."),
});
export type SummarizeTestimonialsOutput = z.infer<typeof SummarizeTestimonialsOutputSchema>;

export async function summarizeTestimonials(input: SummarizeTestimonialsInput): Promise<SummarizeTestimonialsOutput> {
  return summarizeTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTestimonialsPrompt',
  input: {schema: SummarizeTestimonialsInputSchema},
  output: {schema: SummarizeTestimonialsOutputSchema},
  prompt: `You are an expert at summarizing user testimonials into concise and impactful quotes.

  Given the following testimonial, provide a summary that highlights the key positive messages. The summary must be a single sentence.

  Testimonial: {{{testimonial}}}
  `,
});

const summarizeTestimonialsFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialsFlow',
    inputSchema: SummarizeTestimonialsInputSchema,
    outputSchema: SummarizeTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
