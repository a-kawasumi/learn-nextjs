import Layout from "../../components/layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Head from "next/head";

interface Props {
  postData: PostData;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

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

const Post: React.VFC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export default Post;
