import { allPosts } from '@/.contentlayer/generated';
import { Metadata } from 'next';
import Component from '@/components/mdx-component';
import { notFound } from 'next/navigation';
type BlogParam = {
 blogId: string;
};

interface BlogDetailsProps {
 params: BlogParam;
}
async function getPostFromParams(params: BlogParam) {
 const slug = params.blogId;
 const post = allPosts.find((p) => p.slug === slug);

 if (!post) {
  return null;
 }

 return post;
}
export async function generateMetadata({
 params,
}: BlogDetailsProps): Promise<Metadata> {
 const post = await getPostFromParams(params);

 if (!post) {
  return {};
 }

 return {
  title: post.title,
  description: post.description,
 };
}
export async function generateStaticParams(): Promise<
 BlogDetailsProps['params'][]
> {
 return allPosts.map((post) => ({
  blogId: post.slug,
 }));
}
const BlogDetails: React.FC<BlogDetailsProps> = async ({ params }) => {
 const post = await getPostFromParams(params);

 if (!post) {
  notFound();
 }

 return (
  <article className='prose prose:text-white prose-blog container mx-auto'>
   <h1>{post.title}</h1>
   <h1>{post.author}</h1>
   <Component code={post.body.code} />
  </article>
 )
}

export default BlogDetails