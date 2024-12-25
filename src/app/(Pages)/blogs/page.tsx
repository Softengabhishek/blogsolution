import { getAllBlogMetadata } from "@/helpers/getAllBlogsMetaData";

const BlogsPage = async () => {
  const blogs = await getAllBlogMetadata();

  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
        From the blog
      </h1>

      {blogs.map((blog) => (
        <div
          key={blog.slug}
          className="mt-8 lg:-mx-6 lg:flex lg:items-center"
        >
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-50 lg:h-76"
            src={blog.image}
            alt={blog.title}
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
            <p className="text-sm text-blue-500 uppercase">{blog.category}</p>

            <a
              href={`/blogs/${blog.slug}`}
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
            >
              {blog.title}
            </a>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {blog.description}
            </p>

            <a
              href={`/blogs/${blog.slug}`}
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a>

            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src={blog.authorImage}
                alt={blog.author}
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  {blog.author}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
