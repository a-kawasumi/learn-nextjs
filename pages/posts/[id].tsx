import Layout from "../../components/layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";

interface Props {
  postData: PostData;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const Post: React.VFC<Props> = ({ postData }) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

// P -> getStaticPropsの返り値の型, Q -> getStaticPropsの引数contextの内部の型
export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params!.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
