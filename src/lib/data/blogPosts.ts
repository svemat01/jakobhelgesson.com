import { readableDate } from '$lib/utils/helpers';
import { z } from 'zod';

export const postSchema = z.array(
	z.object({
		minutesRead: z.string(),
		title: z.string(),
		description: z.string(),
		author: z.string(),
		date: z.coerce.date().transform((d) => readableDate(d)),
		tags: z.array(z.string()),
		draft: z.boolean(),
		slug: z.string()
	})
);

export type Post = z.infer<typeof postSchema>;

export const getPosts = async (limit: number): Promise<Post> => {
	const posts = await fetch('https://blog.helgesson.dev/posts.json');

	// console log output of posts
	console.log({posts});

    const postsJson = await posts.json();
	console.log({postsJson});

    return postSchema.parse(postsJson).slice(0, limit);
}