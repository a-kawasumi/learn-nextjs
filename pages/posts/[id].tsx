import Layout from "../../components/layout";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

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
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData?.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
      </article>
    </Layout>
  );
};

export default Post;
