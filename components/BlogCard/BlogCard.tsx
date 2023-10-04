import Image from "next/image"
import Link from "next/link"
import { FC } from "react";
import { Post } from '@/.contentlayer/generated';
interface IBlogCard {
 post: Post;
}
const BlogCard: FC<IBlogCard> = ({ post }) => {
 return (
  <Link href={`/blogs/${post.slug}`} className="block">
   <div className="flex flex-col border">
    <div>
     <Image src={"https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="image" height={400} width={400} className="object-cover" />
    </div>
    <div>
     <h3>{post.title}</h3>
     <p>{post.description}</p>
     <p>{post.author}</p>
    </div>
   </div>

  </Link>
 )
}

export default BlogCard