import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "src", "content");
export function getAllBlogMetadata() {

  const fileNames = fs.readdirSync(blogsDirectory);

  const blogs = fileNames.map((fileName) => {
    const filePath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContents);

    return {
      title: data.title,
      slug: data.slug,
      description: data.description,
      author: data.author,
      image: data.image,
      date: data.date,
      authorImage: data.authorImage || "/profile-abhi.jpg",
    };
  });

  return blogs;
}
