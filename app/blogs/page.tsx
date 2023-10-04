import { allPosts } from '@/.contentlayer/generated';
import BlogCard from '@/components/BlogCard/BlogCard';
import Component from '@/components/mdx-component';
const Blogs = () => {
 // const posts = allPosts[0];
 // console.log(allPosts)
 return (
  <>
   {
    allPosts &&
    allPosts.map((post, index) => {
     return (
      <div key={post._id}>
       <article key={index}>
        <BlogCard post={post} />
       </article>
      </div>
     );
    })
   }
   {/* <article>
    <BlogCard post={posts} />
   </article> */}
  </>
 )
}

export default Blogs